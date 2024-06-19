


<template>
  <div id="app">
    <div class="login-container" v-if="!auth.prijavljen">
      <!-- Vaš kod za prijavu -->
    </div>
    <div v-else>
      <h1>Dobrodošao, {{ auth.korisnicko_ime }}</h1>
      <button @click="auth.odjavaKorisnika">Odjavi se</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import axios from 'axios'

</script>~/components/dagf/useAuth