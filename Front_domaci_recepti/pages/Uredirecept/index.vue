<template>
  <div id="app">
    <h2 class="title">Uredi recept</h2>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="naziv_recepta">Naziv recepta:</label>
        <input type="text" id="naziv_recepta" v-model="nazivRecepta" maxlength="60" required>
      </div>
      <div class="form-group">
        <label for="opis">Opis:</label>
        <textarea id="opis" v-model="opis" maxlength="1000" required></textarea>
      </div>
      <div class="form-group">
        <label for="slika">Slika:</label>
        <input type="file" id="slika" @change="handleFileUpload" accept="image/*">
        <span v-if="slikaTooLarge" class="error-message">Slika je prevelika (max 5 MB)</span>
        <span v-if="slikaInvalidFormat" class="error-message">Neispravan format slike</span>
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
import accountStore from '@/composables/accountStore';

definePageMeta({
  layout: ''
});

export default {
  data() {
    return {
      originalRecept: null,
      nazivRecepta: '',
      opis: '',
      slika: null,
      vrstaJela: null,
      slikaTooLarge: false,
      slikaInvalidFormat: false
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
    submitForm() {
      if (this.originalRecept.nazivRecepta === this.nazivRecepta &&
        this.originalRecept.opis === this.opis &&
        this.originalRecept.vrstaJela === this.vrstaJela &&
        !this.slika) {
        this.$router.go(-1);
        return;
      }

      const formData = new FormData();
      formData.append('recept_id', accountStore.state.receptId);
      formData.append('naziv_recepta', this.nazivRecepta);
      formData.append('opis', this.opis);
      if (this.slika) {
        formData.append('slika', this.slika);
      }
      formData.append('vrstajela', this.vrstaJela);

      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");

      axios.post('http://localhost:8000/api/updaterec', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(() => {
          this.$router.go(-1);
        })
        .catch(error => {
          console.error('Došlo je do greške prilikom spremanja recepta:', error);
        });
    },
    getReceptData(id_recepta) {
      axios.get(`http://127.0.0.1:8000/api/dohvatirec/${id_recepta}`)
        .then(response => {
          this.originalRecept = response.data;
          this.nazivRecepta = response.data.naziv_recepta;
          this.opis = response.data.opis;
          this.vrstaJela = response.data.vrstajela;
        })
        .catch(error => {
          console.error('Došlo je do greške prilikom dohvaćanja recepta:', error);
        });
    }
  },
  created() {
    let receptId = accountStore.state.receptId;
    if (typeof sessionStorage !== 'undefined') {
      receptId = receptId || sessionStorage.getItem('receptId');
    }
    this.getReceptData(receptId);
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: tomato;
  margin-bottom: 1rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
textarea,
button[type="submit"],
.v-combobox {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.v-combobox .v-input__control {
  width: 100%;
}

button[type="submit"] {
  background-color: #FF6347;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0.65rem 1rem; /* Adjusted padding */
  align-self: center;
  max-width: 200px; /* Maximalna širina dugmeta */
  width: 100%; /* Da se dugme prilagodi roditeljskom kontejneru */
  box-sizing: border-box; /* Da padding ne utječe na ukupnu širinu */
}


button[type="submit"]:hover {
  background-color: #ff1b3d;
}

.error-message {
  color: red;
}

@media (max-width: 1200px) {
  .form-container {
    max-width: 80%;
  }
}

@media (max-width: 992px) {
  .form-container {
    max-width: 90%;
  }
}

@media (max-width: 768px) {
  .form-container {
    max-width: 95%;
  }

  input[type="text"],
  textarea,
  button[type="submit"],
  .v-combobox {
    font-size: 0.875rem;
    padding: 0.4rem;
  }
}

@media (max-width: 480px) {
  .form-container {
    max-width: 100%;
  }

  input[type="text"],
  textarea,
  button[type="submit"],
  .v-combobox {
    font-size: 0.75rem;
    padding: 0.3rem;
  }
}
</style>
