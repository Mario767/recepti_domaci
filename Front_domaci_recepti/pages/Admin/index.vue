<template>
  <v-row>
    <div class="form-group">
      <v-combobox class="combobox" label="Vrsta korisnika" v-model="vrstaKorisnika" :items="['Admin', 'Korisnik']" required @change="fetchKorisnici"></v-combobox>
      <v-row>
        <v-text-field v-model="korisnickoIme" label="Korisničko ime" required></v-text-field>
        <v-btn class="btn" @click="pretraziKorisnika">Pretraži</v-btn>
      </v-row>

    </div>
  </v-row>

  <v-data-table :headers="headers" :items="korisnici" class="elevation-1" :loading="loading">
    <template v-slot:item.action="{ item }">
      <v-btn class="btn" style="background-color: #FF6347; margin-right: 0.1rem" @click="goToRecepti(item)">Recepti</v-btn>
      <template v-if="vrstaKorisnika !== 'Admin'">
        <v-btn class="btn" style="margin: 0; margin-right: 0.1rem" color="primary" @click="promoviraj(item.Id)">Promote</v-btn>
        <v-btn class="btn" style="margin: 0" color="error" @click="izbrisi(item.Id)">Izbriši</v-btn>
      </template>
      <template v-if="vrstaKorisnika === 'Admin'">
        <v-btn class="btn" style="margin-right: 0.5rem" color="error" @click="demote(item.Id)">Demote</v-btn>
      </template>
    </template>
  </v-data-table>

  <div class="pagination">
    <button class="pagination-button" v-if="page > 1" @click="fetchKorisnici(page - 1)">Previous</button>
    <button class="pagination-button" v-if="nextPageAvailable" @click="fetchKorisnici(page + 1)">Next</button>
  </div>

  <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor" :style="{ bottom: '50px' }">
    {{ snackbarMessage }}
    <v-btn color="white" text @click="snackbar = false" class="snackbar-close-btn">Close</v-btn>
  </v-snackbar>
</template>


<script>
import axios from 'axios';
import accountStore from '@/composables/accountStore';

definePageMeta({
  layout: 'admin'
});

export default {
  data() {
    return {
      vrstaKorisnika: '',
      korisnici: [],
      korisnickoIme: '',
      headers: [
        { text: 'Id', value: 'Id' },
        { text: 'Ime', value: 'Ime' },
        { text: 'Datum', value: 'Datum' },
        { text: 'Akcija', value: 'action', sortable: false },
      ],
      loading: false,
      page: 1,
      nextPageAvailable: false,
      snackbar: false,
      snackbarMessage: '',
      snackbarColor: '',
      timeout: 3000,
    };
  },
  watch: {
    vrstaKorisnika() {
      this.page = 1; // Resetiranje stranice kada se promijeni vrsta korisnika
      this.fetchKorisnici();
    },
  },
  methods: {
    goToRecepti(korisnik) {
      this.$router.push({ path: `/admin/recepti` });
      accountStore.actions.setKorinsikId(korisnik.Id);
    },
    async demote(idKorisnika) {
      try {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        const response = await axios.post('http://pzi202024.studenti.sum.ba/backend/api/adminukloni', { korisnik_id: idKorisnika }, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        console.log(response.data);
        this.snackbarMessage = 'Korisniku uspješno skinuta uloga admina.';
        this.snackbarColor = 'success';
        this.snackbar = true;
        this.fetchKorisnici();
      } catch (error) {
        console.error(error);
        this.snackbarMessage = error.response?.data?.message || 'Došlo je do greške.';
        this.snackbarColor = 'error';
        this.snackbar = true;
      }
    },
    async izbrisi(idKorisnika) {
      try {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        const response = await axios.post('http://pzi202024.studenti.sum.ba/backend/api/delkorisnik', { korisnik_id: idKorisnika }, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        console.log(response.data);
        this.snackbarMessage = 'Korisnik uspješno izbrisan.';
        this.snackbarColor = 'success';
        this.snackbar = true;
        this.fetchKorisnici(); // Osvježite podatke
      } catch (error) {
        console.error(error);
        this.snackbarMessage = error.response?.data?.message || 'Došlo je do greške.';
        this.snackbarColor = 'error';
        this.snackbar = true;
      }
    },
    async promoviraj(idKorisnika) {
      try {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        const response = await axios.post('http://pzi202024.studenti.sum.ba/backend/api/adminuloge', { korisnik_id: idKorisnika }, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        console.log(response.data);
        this.snackbarMessage = 'Korisnik uspješno promoviran.';
        this.snackbarColor = 'success';
        this.snackbar = true;
        this.fetchKorisnici(); // Osvježite podatke
      } catch (error) {
        console.error(error);
        this.snackbarMessage = error.response?.data?.message || 'Došlo je do greške.';
        this.snackbarColor = 'error';
        this.snackbar = true;
      }
    },
    async fetchKorisnici(page) {
      this.loading = true;
      this.page = Number(page); // Pretvorite page u broj

      // Ako page nije broj (NaN), postavite ga na 1
      if (isNaN(this.page)) {
        this.page = 1;
      }

      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      let url = '';

      if (this.vrstaKorisnika === 'Admin') {
        url = 'http://pzi202024.studenti.sum.ba/backend/api/korisniciadmin';
      } else {
        url = 'http://pzi202024.studenti.sum.ba/backend/api/korisnici';
      }

      try {
        const response = await axios.get(url, {
          params: { page: this.page },
          headers: { Authorization: `Bearer ${authToken}` },
        });
        this.korisnici = response.data.data;
        this.nextPageAvailable = response.data.next_page_url !== null;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.snackbarMessage = error.response?.data?.message || 'Došlo je do greške.';
        this.snackbarColor = 'error';
        this.snackbar = true;
        this.loading = false;
      }
    },
    async pretraziKorisnika() {
      this.page = 1;
      await this.fetchKorisnici();
    },
  },
  created() {
    // Dohvat podataka prilikom inicijalizacije
    this.fetchKorisnici();
  },
};

</script>

<style>
.form-group {
  margin-bottom: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 2rem;
  width: 38rem;
}

.pagination {
  display: flex;
  justify-content: center;
}

.pagination-button {
  margin-top: 11px;
  margin-left: 11px;
  color: white;
  background-color: #FF6347;
  border: none;
  padding: 0.7rem;
  border-radius: 10%;
}

.v-snackbar {
  bottom: 50px !important; /* Pozicioniraj snackbar malo više */
}

.snackbar-close-btn {
  margin-left: 6rem; /* Pozicioniraj dugme "Close" na desnu stranu */
}

.combobox{
  margin-top: 0.5rem;
  max-width: 200px;
}

.btn {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px; /* Smanjena veličina teksta */
  cursor: pointer;
  margin: 0.6rem;
}

@media (max-width: 768px) {
  .btn {
    font-size: 12px; /* Još manja veličina teksta za manje ekrane */
    padding: 0.5rem; /* Manji padding za bolju prilagodbu */
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem; /* Dodan margin za razdvajanje od tablice */
}

.pagination-button {
  color: white;
  background-color: #FF6347;
  border: none;
  padding: 0.7rem;
  border-radius: 10%;
  margin: 0 0.2rem; /* Manji margin između buttona */
}

@media (max-width: 768px) {
  .pagination-button {
    padding: 0.5rem; /* Manji padding za bolju prilagodbu */
  }
}

.v-snackbar {
  bottom: 50px !important; /* Pozicioniranje snackbara */
}

.snackbar-close-btn {
  margin-left: auto; /* Automatski položaj za dugme "Close" */
}

</style>
