<template>
  <div id="app" v-cloak>
    <div v-if="isCheckingLogin">
      <h1>Provjera prijave...</h1>
    </div>
    <div v-else>
      <div v-if="isLoggedIn">
        <h1>Prijavljeni ste</h1>
      </div>
      <div class="login-container" v-else>
        <h1 class="title">Domaći recepti</h1>
        <input class="input-field" type="text" placeholder="Unesi ime" v-model="korisnicko_ime" :disabled="isCheckingLogin" required />
        <p v-if="errors.korisnicko_ime" class="error-message">{{ errors.korisnicko_ime }}</p>

        <input class="input-field" type="password" placeholder="Unesi lozinku" v-model="lozinka" :disabled="isCheckingLogin" required />
        <p v-if="errors.lozinka" class="error-message">{{ errors.lozinka }}</p>

        <button class="login-button" @click.prevent="prijavi" :disabled="isCheckingLogin">Prijavi se</button>
        <p v-if="errors.general" class="error-message">{{ errors.general }}</p>
        <div class="register-container">
          <p>Nemaš račun? <router-link to="/register" class="register-button">Registriraj se</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue';
import accountStore from '@/composables/accountStore'; 

export default {
  data() {
    return {
      korisnicko_ime: '',
      lozinka: '',
      isLoggedIn: false,
      isCheckingLogin: true,
      errors: {
        korisnicko_ime: '',
        lozinka: '',
        general: ''
      }
    }
  },
  async created() {
    try {
      this.isLoggedIn = await accountStore.getters.isLoggedIn();
      if (this.isLoggedIn) {
        await nextTick();
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error during login check:', error);
    } finally {
      this.isCheckingLogin = false;
    }
  },
  methods: {
    async prijavi() {
      if (this.isCheckingLogin) return;

      // Reset errors
      this.errors = { korisnicko_ime: '', lozinka: '', general: '' };

      // Frontend validation
      if (!this.korisnicko_ime) {
        this.errors.korisnicko_ime = 'Korisničko ime je obavezno';
      }
      if (!this.lozinka) {
        this.errors.lozinka = 'Lozinka je obavezna';
      }
      if (this.errors.korisnicko_ime || this.errors.lozinka) {
        return;
      }

      try {
        await fetch('http://localhost:8000/sanctum/csrf-cookie');
        const response = await fetch('http://localhost:8000/api/prijavi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            korisnicko_ime: this.korisnicko_ime,
            lozinka: this.lozinka
          })
        });
        const data = await response.json();
        if (response.ok) {
          document.cookie = `authToken=${data.access_token}; path=/`;
          document.cookie = `username=${this.korisnicko_ime}; path=/`;
          document.cookie = `email=${data.korisnik.email}; path=/`;
          this.isLoggedIn = true;
          await nextTick();
          if (data.korisnik.uloga_id == 2 || data.korisnik.uloga_id ) {
            window.location.href = '/admin';
          } else {
            window.location.href = '/';
          }
        } else {
          this.errors = data.errors || {};
        }
      } catch (error) {
        this.errors.general = 'Došlo je do greške prilikom prijave: ' + error.message;
        console.error('Detalji greške: ', error);
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

.login-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.input-field {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
}

.login-button {
  width: 100%;
  padding: 15px;
  background-color: #FFA07A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
}

.register-container {
  margin-top: 10px;
  text-align: center;
}

.register-button {
  color: #FFA07A;
  text-decoration: none;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

[v-cloak] {
  display: none;
}
</style>
