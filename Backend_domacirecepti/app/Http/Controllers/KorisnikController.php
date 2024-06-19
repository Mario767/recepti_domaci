<?php

namespace App\Http\Controllers;

use App\Models\Korisnik;
use App\Models\Recept;
use App\Models\Ocjena;
use App\Models\ConfirmationCode;
use App\Models\Komentar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\ConfirmationCodeMail;



use Carbon\Carbon;

class KorisnikController extends Controller
{


    public function prijavaKorisnika(Request $request)
    {
        try {
            // Validacija ulaznih podataka
            $credentials = $request->validate([
                'korisnicko_ime' => 'required',
                'lozinka' => 'required',
            ], [
                'korisnicko_ime.required' => 'Korisničko ime je obavezno.',
                'lozinka.required' => 'Lozinka je obavezna.'
            ]);

            // Provjera da li korisničko ime postoji
            $korisnik = Korisnik::where('korisnicko_ime', $credentials['korisnicko_ime'])->first();
            if (!$korisnik) {
                return response()->json(['errors' => ['korisnicko_ime' => 'Korisničko ime ne postoji']], 404);
            }

            // Pokušaj autentifikacije
            if (Auth::attempt(['korisnicko_ime' => $credentials['korisnicko_ime'], 'password' => $credentials['lozinka']])) {
                $korisnik = Auth::user();
                $token = $korisnik->createToken('MyApp')->plainTextToken;
                return response()->json(['message' => 'Uspješna prijava', 'korisnik' => $korisnik, 'access_token' => $token]);
            } else {
                return response()->json(['errors' => ['lozinka' => 'Neispravna lozinka']], 401);
            }
        } catch (\Exception $e) {
            // Vraćanje detalja o grešci
            return response()->json(['errors' => ['general' => 'Došlo je do greške', 'error' => $e->getMessage()]], 500);
        }
    }



    public function odjavaKorisnika(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $user->currentAccessToken()->delete();
            return response()->json(['message' => 'Uspješna odjava']);
        } else {
            return response()->json(['message' => 'Već ste odjavljeni']);
        }
    }







    public function findKorisnika($username)
    {
        $korisnik = Korisnik::where('korisnicko_ime', $username)->first();
        if ($korisnik) {
            return response()->json($korisnik);
        } else {
            return response()->json(['error' => 'Korisnik nije pronađen'], 404);
        }
    }


    public function getUsersByRole()
    {
        $user = Auth::user(); // Dohvati trenutno prijavljenog korisnika
        if ($user && ($user->uloga_id == 2 || $user->uloga_id == 3 )) {
            // Ako je korisnik admin (uloga 2), dohvati korisnike s ulogom 1
            $korisnici = Korisnik::where('uloga_id', 1)->select('korisnik_id as Id', 'korisnicko_ime as Ime', 'created_at as Datum')->paginate(25);
            foreach ($korisnici as $korisnik) {
                $korisnik->Datum = Carbon::parse($korisnik->Datum)->format('d.m.Y H:i');
            }
            return $korisnici;
        } else {
            // Ako korisnik nije admin, ispiši grešku
            return 'Niste admin.';
        }
    }

    public function getUsersByRole2()
    {
        $user = Auth::user(); // Dohvati trenutno prijavljenog korisnika
        if ($user && ($user->uloga_id == 2 || $user->uloga_id == 3)) {
            // Ako je korisnik admin (uloga 2), dohvati korisnike s ulogom 1
            $korisnici = Korisnik::where('uloga_id', 2)->select('korisnik_id as Id', 'korisnicko_ime as Ime', 'created_at as Datum')->paginate(25);
            return $korisnici;
        } else {
            // Ako korisnik nije admin, ispiši grešku
            return 'Niste admin.';
        }
    }

    public function promijeniUlogu(Request $request)
    {
        $user = Auth::user(); // Dohvati trenutno prijavljenog korisnika
        if ($user && ($user->uloga_id == 2 || $user->uloga_id == 3)) { // Provjeri je li korisnik admin
            $korisnik = Korisnik::find($request->korisnik_id);
            if ($korisnik) {
                $korisnik->uloga_id = 2; // Promijeni ulogu na 2 (admin)
                $korisnik->save();
                return response()->json(['message' => 'Uloga korisnika je uspješno promijenjena.']);
            } else {
                return response()->json(['error' => 'Korisnik nije pronađen.'], 404);
            }
        } else {
            return response()->json(['error' => 'Nemate pristup ovoj funkciji.'], 403);
        }
    }

    public function skidajUlogu(Request $request)
    {
        $user = Auth::user();
        if ($user && $user->uloga_id == 3) { // Provjera je li trenutno prijavljeni korisnik super admin
            $korisnik = Korisnik::find($request->korisnik_id);
            if ($korisnik) {
                $korisnik->uloga_id = 1; // Postavljanje uloge na korisnika (ili drugu prikladnu ulogu)
                $korisnik->save();
                return response()->json(['message' => 'Uloga korisnika je uspješno promijenjena.']);
            } else {
                return response()->json(['error' => 'Korisnik nije pronađen.'], 404);
            }
        } else {
            return response()->json(['error' => 'Nemate pristup ovoj funkciji.'], 403);
        }
    }

    public function obrisiKorisnika(Request $request)
    {
        $user = Auth::user(); // Dohvati trenutno prijavljenog korisnika
        if ($user && ( $user->uloga_id == 2 || $user->uloga_id == 3)) { // Provjeri je li korisnik admin
            $korisnik = Korisnik::find($request->korisnik_id);
            if ($korisnik) {
                if ($korisnik->uloga_id != 1) {
                    return response()->json(['error' => 'Ne možete obrisati admina.'], 403);
                } else {
                    // Obrisi sve recepte, ocjene i komentare korisnika
                    Recept::where('korisnik_id', $korisnik->korisnik_id)->delete();
                    Ocjena::where('korisnik_id', $korisnik->korisnik_id)->delete();
                    Komentar::where('idkorisnika', $korisnik->korisnik_id)->delete();

                    // Obrisi korisnika
                    $korisnik->delete();

                    return response()->json(['message' => 'Korisnik je uspješno obrisan.']);
                }
            } else {
                return response()->json(['error' => 'Korisnik nije pronađen.'], 404);
            }
        } else {
            return response()->json(['error' => 'Nemate pristup ovoj funkciji.'], 403);
        }
    }
    public function podaciKorisnika($korisnicko_ime)
    {
        // Dohvati trenutno prijavljenog korisnika
        $korisnik = Auth::user();

        // Provjeri da li korisnik nije prijavljen ili nema ulogu 2 (Admin)
        if (!$korisnik || ($korisnik->uloga_id !== 2 || $korisnik->uloga_id !== 3 ) ) {
            // Ako korisnik nije prijavljen ili nije admin, vrati odgovarajuću poruku
            return response()->json(['message' => 'Nemate pravo pristupa.']);
        }

        // Dohvati podatke o korisniku na temelju korisnicko_ime
        $korisnikPodaci = Korisnik::where('korisnicko_ime', $korisnicko_ime)->select('korisnik_id as Id', 'korisnicko_ime as Ime', 'created_at as Datum')->get();

        return response()->json($korisnikPodaci);
    }

    public function sendConfirmationCode(Request $request)
    {
        // Provjerite postoji li korisnik s tim korisničkim imenom
        $existUsername = Korisnik::where('korisnicko_ime', $request->korisnicko_ime)->first();

        if ($existUsername) {
            return response()->json([
                'errors' => [
                    'korisnicko_ime' => ['Postoji korisnik s tim korisničkim imenom']
                ]
            ], 422);
        }

        // Provjerite postoji li korisnik s tim e-mailom
        $existMail = Korisnik::where('email', $request->email)->first();

        if ($existMail) {
            return response()->json([
                'errors' => [
                    'email' => ['Postoji korisnik s tim emailom']
                ]
            ], 422);
        }

        // Generirajte jedinstveni kod za potvrdu
        $confirmationCode = Str::random(16);

        // Provjerite postoji li već kod za potvrdu za ovaj e-mail
        $existingConfirmationCode = ConfirmationCode::where('email', $request->email)->first();

        if ($existingConfirmationCode) {
            // Ako postoji, ažurirajte ga
            $existingConfirmationCode->update([
                'code' => $confirmationCode,
                'expires_at' => now()->addMinutes(3),
            ]);
        } else {
            // Ako ne postoji, stvorite novi
            ConfirmationCode::create([
                'email' => $request->email,
                'code' => $confirmationCode,
                'expires_at' => now()->addMinutes(3),
            ]);
        }

        // Pošaljite e-mail s kodom za potvrdu
        Mail::to($request->email)->send(new ConfirmationCodeMail($confirmationCode));

        return response()->json(['message' => 'Kod za potvrdu poslan na e-mail!']);
    }

    public function confirmCode(Request $request)
    {
        $storedConfirmationCode = ConfirmationCode::where('email', $request->email)->first();

        if ($storedConfirmationCode && $storedConfirmationCode->expires_at > now()) {
            if ($request->confirmationCode == $storedConfirmationCode->code) {
                // Ako se podudaraju, registrirajte korisnika
                $data = $request->validate([
                    'korisnicko_ime' => 'required|min:2|max:30',
                    'lozinka' => 'required',
                    'email' => 'required|email',
                ]);

                $data['lozinka'] = Hash::make($data['lozinka']);
                $data['uloga_id'] = 1; // Dodajemo ovu liniju da bismo automatski dodelili ulogu korisniku

                $korisnik = new Korisnik();
                $korisnik->create($data);

                // Uklonite kod za potvrdu iz baze podataka
                $storedConfirmationCode->delete();

                return response()->json(['message' => 'Registracija uspješna!']);
            }
        }

        return response()->json(['message' => 'Neispravan kod za potvrdu'],404);
    }

}
