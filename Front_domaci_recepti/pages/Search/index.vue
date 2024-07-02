<template>
  <div id="app">
    <div class="search-form">
      <form @submit.prevent="fetchData">
        <input v-model="naziv_recepta" type="text" placeholder="Unesite naziv recepta" class="responsive-input">
        <button type="submit" class="responsive-button">Pretraži</button>
      </form>
    </div>
    <CardRecepti :recepti="recepti && recepti.recepti ? recepti.recepti.data : []" />
    <p v-if="recepti && recepti.recepti && recepti.recepti.data.length === 0">Nema rezultata za pretragu "{{ naziv_recepta }}"</p>

    <div class="pagination">
      <button class="pagination-button" v-if="recepti && recepti.recepti && recepti.recepti.current_page > 1" @click="fetchData(recepti.recepti.current_page - 1)">Previous</button>
      <button class="pagination-button" v-if="recepti && recepti.recepti && recepti.recepti.last_page > recepti.recepti.current_page" @click="fetchData(recepti.recepti.current_page + 1)">Next</button>
    </div>
    <p v-if="error">{{ error }}</p>

    <footer class="footer">
      <p>&copy; 2024 Vaše ime. Sva prava pridržana.</p>
    </footer>
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
      axios.get(`http://pzi202024.studenti.sum.ba/backend/api/search/${this.naziv_recepta}?page=${page}`) // Dodajte parametar stranice
        .then(response => {
          this.recepti = response.data;
          console.log(this.recepti)
        })
        .catch(error => {
          this.error = 'Došlo je do greške prilikom dohvaćanja podataka';
          console.log(error);
        });
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
  box-sizing: border-box; /* Dodano za uključivanje padding-a i border-a u ukupnu širinu */
}

.search-form input {
  flex-grow: 1;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  box-sizing: border-box; /* Dodano za uključivanje padding-a i border-a u ukupnu širinu */
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
  box-sizing: border-box; /* Dodano za uključivanje padding-a i border-a u ukupnu širinu */
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.pagination-button {
  color: white;
  background-color: #FF6347;
  border: none;
  padding: 0.7rem;
  border-radius: 10%;
  margin: 0 0.5rem;
}

.footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #f8f8f8;
  position: absolute;
  width: 100%;
  bottom: 0;
}

@media (max-width: 640px) {
  .search-form form {
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
  }

  .search-form input {
    margin-right: 0;
    margin-bottom: 0.5rem;
    font-size: 14px;
  }

  .search-form button {
    font-size: 14px;
    padding: 0.5rem;
  }

  .pagination-button {
    padding: 0.5rem;
    font-size: 14px;
  }

  .footer {
    font-size: 14px;
  }
}
</style>
