<template>
  <div id="app">
    <CardRecepti :recepti="recepti ? recepti.data : []" />
    <div class="pagination">
      <button class="pagination-button" v-if="recepti && recepti.current_page > 1" @click="fetchData(recepti.current_page - 1)">Previous</button>
      <button class="pagination-button" v-if="recepti && recepti.last_page > recepti.current_page" @click="fetchData(recepti.current_page + 1)">Next</button>
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
      error: null
    };
  },
  mounted() {
    this.fetchData(1);
  },
  methods: {
    fetchData(page) {
      axios.get(`http://127.0.0.1:8000/api/dohvatiglavno?page=${page}`)
        .then(response => {
          this.recepti = response.data.recepti;
        })
        .catch(error => {
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
  color: white;
  background-color: #FF6347;
  border: none;
  padding: 0.7rem;
  border-radius: 10%;
}
</style>
