<template>
  <div class="card-recepti">
    <div v-for="recept in recepti" :key="recept.recept_id" class="card card-hover" @click="goToRecept(recept)">
      <img :src="getImageUrl(recept.slika)" alt="Recept slika">
      <div class="card-body">
        <h5 class="card-title">{{ recept.naziv_recepta }}</h5>
        <p class="card-text">Autor: {{ recept.korisnicko_ime }}</p>
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recepti: {
      type: Array,
      required: true
    }
  },
  
  methods: {
    getImageUrl(slika) {
      return 'http://pzi202024.studenti.sum.ba/backend/' + slika;
    },
    goToRecept(recept) {
      let formattedNaziv = recept.naziv_recepta.replace(/\s+/g, '_'); // Zamjenjuje sve razmake s '_'
      this.$router.push({ path: `/News/${formattedNaziv}` });
      accountStore.actions.setReceptId(recept.recept_id); // Dodajte ovu liniju
    }
  }
}
</script>




<style scoped>
.card-recepti {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.card {
  flex: 1 0 21%; /* Četiri kartice u jednom redu */
  margin: 1.5%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: calc(100% / 4 - 3%); /* Ograničava maksimalnu širinu kartice */
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-title {
   
  font-style:oblique;
  font-weight: bold;
  color: #FF6347; /* Tomato */
  text-shadow: 1px 1px #ff1b3d; /* Tomato */
  font-size: 1.3rem; /* Smanjena veličina naslova */
  margin-bottom: 5px; /* Smanjen razmak ispod naslova */
  text-transform: uppercase;
}

.card-text {
  margin-bottom: 5px;
}

@media (max-width: 1400px) {
  .card {
    flex: 1 0 31%; /* Tri kartice u jednom redu */
    max-width: calc(100% / 3 - 3%); /* Ograničava maksimalnu širinu kartice */
  }
}

@media (max-width: 992px) {
  .card {
    flex: 1 0 46%; /* Dvije kartice u jednom redu */
    max-width: calc(100% / 2 - 3%); /* Ograničava maksimalnu širinu kartice */
  }
}

@media (max-width: 576px) {
  .card {
    flex: 1 0 100%; /* Jedna kartica u jednom redu */
    max-width: 100%; /* Ograničava maksimalnu širinu kartice */
  }
}

.card-hover:hover {
  transform: scale(1.05);
}
</style>
