<template>
  <div id="app">
    <Mojirec :recepti="recepti ? recepti.data : []" @recept-izbrisan="fetchData(recepti.current_page)" />
    <div class="pagination">
      <button class="pagination-button" v-if="recepti && recepti.current_page > 1" @click="fetchData(recepti.current_page - 1)">Previous</button>
      <button class="pagination-button" v-if="recepti && recepti.last_page > recepti.current_page" @click="fetchData(recepti.current_page + 1)">Next</button>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import Mojirec from '@/components/Mojirec.vue';
  
  // Postavljanje osnovnog URL-a za Axios unutar komponente
  axios.defaults.baseURL = 'http://127.0.0.1:8000/'; // Promijenjen osnovni URL
  
  export default {
    components: {
      Mojirec
    },
    data() {
      return {
        recepti: null,
        error: null
      };
    },
    mounted() {
      this.fetchData(1);
    },
    methods: {
      fetchData(page) {
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      axios.get(`api/mojirecepti?page=${page}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then(response => {
        this.recepti = response.data;
      }).catch(error => {
        this.error = 'Došlo je do greške prilikom dohvata recepata: ' + error.message;
      });
    }
    }
  };
  </script>
 

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination-button {
  color: white; /* Bijela boja teksta */
  background-color: #FF6347; /* Tomato boja pozadine */
  border: none; /* Uklanja standardni okvir dugmeta */
  /* Dodajte ostale stilove po želji */
  padding: 0.7rem; /* Padding u removima */
  border-radius: 10%;
}
</style>
