<template>
  <div id="app">
    <h2>Dodaj novi recept</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="naziv_recepta">Naziv recepta:</label>
        <input type="text" id="naziv_recepta" v-model="nazivRecepta" maxlength="60" required>
      </div>
      <div class="form-group">
        <label for="opis">Opis:</label>
        <textarea id="opis" v-model="opis" maxlength="1000" required></textarea>
        <span v-if="opisError" style="color: red;">{{ opisError }}</span>
      </div>
      <div class="form-group">
        <label for="slika">Slika:</label>
        <input type="file" id="slika" @change="handleFileUpload" accept="image/*" required>
        <span v-if="slikaTooLarge" style="color: red;">Slika je prevelika (max 5 MB)</span>
        <span v-if="slikaInvalidFormat" style="color: red;">Neispravan format slike</span>
      </div>
      <div class="form-group">
        <v-combobox
          label="Vrsta jela"
          v-model="vrstaJela"
          :items="['Glavno jelo', 'Predjelo', 'Desert']"
          required
        ></v-combobox>
      </div>
      <button type="submit" :disabled="slikaTooLarge || slikaInvalidFormat">Spremi recept</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      nazivRecepta: '',
      opis: '',
      slika: null,
      vrstaJela: null,
      slikaTooLarge: false,
      slikaInvalidFormat: false,
      opisError: '' // Dodajemo polje za prikaz greške za opis
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5 MB limit
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']; // Allowed image types
      if (!file) return;

      if (file.size > maxSize) {
        this.slikaTooLarge = true;
        this.slikaInvalidFormat = false;
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        this.slikaInvalidFormat = true;
        this.slikaTooLarge = false;
        return;
      }

      this.slikaTooLarge = false;
      this.slikaInvalidFormat = false;
      this.slika = file;
    },
    async submitForm() {
      if (this.opis.length > 1000) {
        this.opisError = 'Ne možete unijeti više od 1000 znakova za opis'; // Postavi poruku za prekoračenje dužine opisa
        return; // Prekini funkciju ako je opis predugačak
      }

      const formData = new FormData();
      formData.append('naziv_recepta', this.nazivRecepta);
      formData.append('opis', this.opis);
      formData.append('slika', this.slika);
      formData.append('vrstajela', this.vrstaJela);

      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");

      try {
        await axios.post('http://pzi202024.studenti.sum.ba/backend/api/recepti', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`
          }
        });
        // Uspješno spremanje recepta, preusmjeri korisnika na /mojirecepti
        this.$router.push('/mojirecepti');
      } catch (error) {
        if (error.response && error.response.status === 422) {
          // Ako je greška 422 (neispravan unos), prikaži poruku za opis
          this.opisError = 'Ne možete uneti više od 1000 znakova za opis';
        } else {
          console.error('Došlo je do greške prilikom spremanja recepta:', error);
        }
      }
    }
  }
};
</script>



<style scoped>
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button[type="submit"] {
  padding: 0.5rem 1rem;
  background-color: #FF6347;
  color: white;
}
</style>
