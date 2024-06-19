<template>
  <div id="app">
    <Adminrec :recepti="recepti ? recepti.data : []" @recept-izbrisan="fetchData(recepti.current_page)" />
    <div class="pagination">
      <button class="pagination-button" v-if="recepti && recepti.current_page > 1" @click="fetchData(recepti.current_page - 1)">Previous</button>
      <button class="pagination-button" v-if="recepti && recepti.last_page > recepti.current_page" @click="fetchData(recepti.current_page + 1)">Next</button>
    </div>
    <p v-if="error">{{ error }}</p>
    <p v-else-if="recepti && !recepti.data.length">Nema kreiranih recepata.</p> <!-- Dodano -->
  </div>
</template>
    
    <script>
    import axios from 'axios';
    import Adminrec from '@/components/Adminrec.vue';
    import accountStore from '@/composables/accountStore'; 
    definePageMeta
    ({
    layout
      : 'admin'
      })
    
    // Postavljanje osnovnog URL-a za Axios unutar komponente
    axios.defaults.baseURL = 'http://127.0.0.1:8000/'; // Promijenjen osnovni URL
    
    export default {
      components: {
        Adminrec
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
        let korisnikId = accountStore.state.korinsikId; // Dodajte ovu liniju
        if (typeof sessionStorage !== 'undefined') {
          korisnikId = korisnikId || sessionStorage.getItem('korinsikId'); // Dodajte ovu liniju
        }
       
      
        axios.get(`http://127.0.0.1:8000/api/receptikorisnika/${korisnikId}?page=${page}`, { // Dodajte korisnik_id u URL
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
          })

      .then(response => {
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
