<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Models\Korisnik;

class KorisniciTableSeeder extends Seeder
{
    public function run()
    {
        Korisnik::create([
            'korisnicko_ime' => 'superadmin1',
            'lozinka' => Hash::make('password123'),
            'email' => 'superadmin1@example.com',
            'uloga_id' => 3, // assuming '3' is the id for the Super Admin role
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        Korisnik::create([
            'korisnicko_ime' => 'superadmin2',
            'lozinka' => Hash::make('password123'),
            'email' => 'superadmin2@example.com',
            'uloga_id' => 3, // assuming '3' is the id for the Super Admin role
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}

