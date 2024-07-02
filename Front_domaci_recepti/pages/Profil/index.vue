<template>
  <div id="app">
    <div v-if="isLoggedIn" class="container">
      <h1 class="title">Domaći recepti</h1>
      <p>Ime: {{ korisnicko_ime }}</p>
      <p>Email: {{ email }}</p>
      <div class="button-row">
        <v-spacer></v-spacer>
        <router-link style="margin-right: 10px" to="/dodajrecept">
          <button class="button">Dodaj recept</button>
        </router-link>
        <v-spacer></v-spacer>
        <router-link style="margin-right: 10px" to="/mojirecepti">
          <button class="button">Prikaži recepte</button>
        </router-link>
        <v-spacer></v-spacer>
      </div>
      <div class="logout-row">
        <button class="logout-button" @click.prevent="odjavi">Odjavi se</button>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue';
import accountStore from '@/composables/accountStore'; 
import axios from 'axios';

export default {
  data() {
    return {
      korisnicko_ime: '',
      email: '',
      isLoggedIn: false
    }
  },
  async created() {
    this.isLoggedIn = accountStore.getters.isLoggedIn();
    if (this.isLoggedIn) {
      // Dohvati korisničko ime i e-mail iz kolačića
      this.korisnicko_ime = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, "$1");
      this.email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*=\s*([^;]*).*$)|^.*$/, "$1");
    }
  },
  methods: {
    async odjavi() {
      // Dohvati token iz kolačića
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      
      // Provjeri je li korisnik prijavljen
      if (accountStore.getters.isLoggedIn()) {
        // Odjavi korisnika na backendu
        axios.post('http://pzi202024.studenti.sum.ba/backend/api/odjavi', {}, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(() => {
          // Uspješna odjava na backendu, sada obriši kolačić s tokenom na frontendu
          document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          // Obriši korisničko ime i e-mail iz kolačića
          document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          // Preusmjeri korisnika na stranicu za prijavu
          window.location.href = '/login';
        })
        .catch(error => {
          console.error(error);
          // Prikazati poruku o grešci
        });
      }
    }
  }
}
</script>


<style scoped>
body {
  background-color: #FFA07A;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.button-row {
  display: flex;
  width: 100%;

}

.button {
  padding: 10px;
  margin: 10px;
  background-color: #FFA07A;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  width: 100%; /* Postavite širinu dugmadi na 45% da budu bliže jedno drugom */
}

.button:hover{
  box-shadow: dimgray 0 0 4px 0;
}

.logout-row {
  display: flex;
  justify-content: center; /* Centrirajte dugme za odjavu */
}

.logout-button {
  padding: 20px; /* Povećajte veličinu dugmeta za odjavu */
  background-color: #FFA07A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%; /* Postavite širinu dugmeta za odjavu na 100% */
}

.logout-button:hover{
  box-shadow: dimgray 0 0 4px 0;
}
</style>
