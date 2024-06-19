<template>
  <div id="app">
    <div v-for="(jelo, index) in topJela" :key="index">
      <h2 class="naslovi">{{ index }}</h2> 
      <HomeRecepti :recepti="jelo" />
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import HomeRecepti from '@/components/HomeRecepti.vue';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export default {
  components: {
    HomeRecepti
  },
  data() {
    return {
      topJela: {}, // Inicijalizacija objekta topJela
      error: null
    };
  },
  mounted() {
    axios.get('api/topjela')
      .then(response => {
        this.topJela = response.data.top_jela; // Postavljanje topJela na dobiveni objekt
      })
      .catch(error => {
        this.error = 'Došlo je do greške prilikom dohvata top jela: ' + error.message;
      });
  }
};
</script>
<style scoped>
.naslovi {
  font-family: 'Segoe Script', cursive;
  font-size: 2.5em;
  color: #FF6347; /* Tomato */
}
</style>