<template>
  <div id="app">
    <div class="search-form">
      <form @submit.prevent="fetchData">
        <input v-model="naziv_recepta" type="text" placeholder="Unesite naziv recepta">
        <button type="submit">Pretraži</button>
      </form>
    </div>
    <CardRecepti :recepti="recepti && recepti.recepti ? recepti.recepti.data : []" />
    <p v-if="recepti && recepti.recepti && recepti.recepti.data.length === 0">Nema rezultata za pretragu "{{ naziv_recepta }}"</p>

    <div class="pagination">
      <button class="pagination-button" v-if="recepti && recepti.recepti && recepti.recepti.current_page > 1" @click="fetchData(recepti.recepti.current_page - 1)">Previous</button>
      <button class="pagination-button" v-if="recepti && recepti.recepti && recepti.recepti.last_page > recepti.recepti.current_page" @click="fetchData(recepti.recepti.current_page + 1)">Next</button>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import CardRecepti from '@/components/CardRecepti.vue';

export default {
  components: {
    CardRecepti
  },
  data() {
    return {
      recepti: null,
      error: null,
      naziv_recepta: '' // Inicijalizirajte ovo kao prazan string
    };
  },
  methods: {
    fetchData(page = 1) {
      axios.get(`http://127.0.0.1:8000/api/search/${this.naziv_recepta}?page=${page}`) // Dodajte parametar stranice
        .then(response => {
          this.recepti = response.data;
          console.log(this.recepti)
        })
        
    }
  }
};
</script>
<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.search-form form {
  display: flex;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 50%;
}

.search-form input {
  flex-grow: 1;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.search-form button {
  background-color: #FF6347; /* Promijenite boju dugmeta u narančastu */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 1rem;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
}

.pagination-button {
  color: white;
  background-color: #FF6347;
  border: none;
  padding: 0.7rem;
  border-radius: 10%;
}
</style>
