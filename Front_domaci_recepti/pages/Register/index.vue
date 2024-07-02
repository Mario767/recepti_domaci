<template>
  <div id="app">
    <div class="login-container">
      <h1 class="title">Domaći recepti</h1>
      <div v-if="!showConfirmationCodeInput && !registrationSuccess">
        <input class="input-field" type="text" placeholder="Unesi korisničko ime" v-model="korisnicko_ime" />
        <p v-if="errors.korisnicko_ime" class="error-message">{{ errors.korisnicko_ime }}</p>

        <input class="input-field" type="email" placeholder="Unesi email" v-model="email" />
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>

        <input class="input-field" type="password" placeholder="Unesi lozinku" v-model="lozinka" />
        <p v-if="errors.lozinka" class="error-message">{{ errors.lozinka }}</p>

        <input class="input-field" type="password" placeholder="Potvrdi lozinku" v-model="potvrda_lozinke" />
        <p v-if="errors.potvrda_lozinke" class="error-message">{{ errors.potvrda_lozinke }}</p>

        <button class="register-button" @click="sendConfirmationCode">Registriraj se</button>
      </div>
      <div v-else-if="showConfirmationCodeInput && !registrationSuccess">
        <input class="input-field" type="text" placeholder="Unesi kod za potvrdu" v-model="confirmationCode" />
        <p v-if="errors.confirmationCode" class="error-message">{{ errors.confirmationCode }}</p>
        <button class="register-button" @click="confirmCode">Potvrdi kod</button>
        <button class="register-button" @click="resendConfirmationCode">Ponovno pošalji kod</button>
        <p v-if="preostaloVrijeme > 0">Kod ističe za: {{ preostaloVrijeme }} sekundi</p>
        <p v-else>Kod je istekao. Ponovno pošaljite kod za prijavu.</p>
      </div>
      <div v-else-if="registrationSuccess">
        <h2>Uspješna registracija!</h2>
        <p>Bit ćete preusmjereni na stranicu za prijavu...</p>
      </div>
      <p v-if="greska" class="error-message">{{ greska }}</p>
      <div v-if="obavijest" :class="{ snackbar: true, show: showSnackbar }">{{ obavijest }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const korisnicko_ime = ref('')
const lozinka = ref('')
const email = ref('')
const potvrda_lozinke = ref('')
const confirmationCode = ref('')
const showConfirmationCodeInput = ref(false)
const greska = ref('')
const registrationSuccess = ref(false)
const obavijest = ref('')
const showSnackbar = ref(false)
const preostaloVrijeme = ref('')
const errors = ref({
  korisnicko_ime: '',
  email: '',
  lozinka: '',
  potvrda_lozinke: '',
  confirmationCode: '' // Dodali smo novo polje za grešku kod koda za potvrdu
})

let countdownInterval = null

const startCountdown = () => {
  clearInterval(countdownInterval); // Resetirajte odbrojavanje
  let timeLeft = 180; // 3 minute
  countdownInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      preostaloVrijeme.value = timeLeft;
    } else {
      clearInterval(countdownInterval);
      preostaloVrijeme.value = '';
    }
  }, 1000);
}

const validateForm = () => {
  let valid = true;

  // Validacija za korisničko ime
  if (!korisnicko_ime.value) {
    errors.value.korisnicko_ime = 'Korisničko ime je obavezno.';
    valid = false;
  } else if (korisnicko_ime.value.length > 40) {
    errors.value.korisnicko_ime = 'Korisničko ime ne može biti duže od 40 znakova.';
    valid = false;
  } else {
    errors.value.korisnicko_ime = '';
  }

  // Validacija za email
  if (!email.value) {
    errors.value.email = 'Email je obavezan.';
    valid = false;
  } else if (email.value.length > 50) {
    errors.value.email = 'Email ne može biti duži od 50 znakova.';
    valid = false;
  } else if (!email.value.includes('@')) {
    errors.value.email = 'Email mora sadržavati @ znak.';
    valid = false;
  } else {
    errors.value.email = '';
  }

  // Validacija za lozinku
  if (!lozinka.value) {
    errors.value.lozinka = 'Lozinka je obavezna.';
    valid = false;
  } else if (lozinka.value.length > 50) {
    errors.value.lozinka = 'Lozinka ne može biti duža od 50 znakova.';
    valid = false;
  } else if (lozinka.value.length < 6) {
    errors.value.lozinka = 'Lozinka mora biti duža od 5 znakova.';
    valid = false;
  } else {
    errors.value.lozinka = '';
  }

  // Validacija za potvrdu lozinke
  if (!potvrda_lozinke.value) {
    errors.value.potvrda_lozinke = 'Potvrda lozinke je obavezna.';
    valid = false;
  } else if (potvrda_lozinke.value !== lozinka.value) {
    errors.value.potvrda_lozinke = 'Lozinke se moraju podudarati.';
    valid = false;
  } else {
    errors.value.potvrda_lozinke = '';
  }

  return valid;
}

const sendConfirmationCode = async () => {
  if (validateForm()) {
    try {
      const response = await axios.post('http://pzi202024.studenti.sum.ba/backend/api/sendcode', {
        korisnicko_ime: korisnicko_ime.value,
        email: email.value,
        lozinka: lozinka.value,
        potvrda_lozinke: potvrda_lozinke.value
      })
      console.log(response)
      if (response.status === 200) {
        showConfirmationCodeInput.value = true
        startCountdown()
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const { errors: serverErrors } = error.response.data;
        // Postavite greske dobivene od servera u errors ref objekt
        if (serverErrors.korisnicko_ime) {
          errors.value.korisnicko_ime = serverErrors.korisnicko_ime[0];
        }
        if (serverErrors.email) {
          errors.value.email = serverErrors.email[0];
        }
        if (serverErrors.lozinka) {
          errors.value.lozinka = serverErrors.lozinka[0];
        }
        if (serverErrors.potvrda_lozinke) {
          errors.value.potvrda_lozinke = serverErrors.potvrda_lozinke[0];
        }
      } else {
        greska.value = 'Došlo je do greške. Pokušajte ponovno.';
      }
      console.error(error)
    }
  }
}

const confirmCode = async () => {
  try {
    const response = await axios.post('http://pzi202024.studenti.sum.ba/backend/api/confirmcode', {
      confirmationCode: confirmationCode.value,
      korisnicko_ime: korisnicko_ime.value,
      lozinka: lozinka.value,
      email: email.value,
    });
    console.log(response);
    if (response.data.message === 'Registracija uspješna!') {
      registrationSuccess.value = true;
      obavijest.value = 'Registracija uspješna!';
      showSnackbar.value = true;
      clearInterval(countdownInterval);
      setTimeout(() => {
        router.push('/login');
      }, 2000); // Automatsko preusmjeravanje nakon 2 sekunde
    } else {
      // Postavite grešku za kod za potvrdu
      errors.value.confirmationCode = response.data.message;
      obavijest.value = response.data.message;
      showSnackbar.value = true;
      setTimeout(() => {
        showSnackbar.value = false;
      }, 3000); // Automatsko skrivanje obavijesti nakon 3 sekunde
    }
  } catch (error) {
    console.error(error);
    errors.value.confirmationCode = 'Neispravan kod za potvrdu.';
  }
};

const resendConfirmationCode = async () => {
  try {
    const response = await axios.post('http://pzi202024.studenti.sum.ba/backend/api/sendcode', {
      korisnicko_ime: korisnicko_ime.value,
      lozinka: lozinka.value,
      email: email.value,
    })
    console.log(response)
    if (response.status === 200) {
      startCountdown()
    }
  } catch (error) {
    console.error(error)
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
  width: 80%;
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

.register-button {
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

.error-message {
  color: red;
}

.snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

.snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
