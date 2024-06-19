<template>
  <div class="card-recepti">
    <div v-for="recept in recepti" :key="recept.recept_id" class="card card-hover" @click="goToRecept(recept)">
      <img :src="getImageUrl(recept.slika)" alt="Recept slika">
      <div class="card-body">
        <h5 class="card-title">{{ recept.naziv_recepta }}</h5>
      </div>
      <div class="card-buttons">
        <button class="delete-button" @click.stop="deleteRecept(recept.recept_id)">Izbriši</button>
        <button class="edit-button" @click.stop="editRecept(recept.recept_id)">Uredi</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
export default {
  props: {
    recepti: {
      type: Array,
      required: true
    }
  },
  
  methods: {
    getImageUrl(slika) {
      return 'http://127.0.0.1:8000/' + slika;
    },
    goToRecept(recept) {
      let formattedNaziv = recept.naziv_recepta.replace(/\s+/g, '_'); // Zamjenjuje sve razmake s '_'
      this.$router.push({ path: `/News/${formattedNaziv}` });
      accountStore.actions.setReceptId(recept.recept_id); // Dodajte ovu liniju
    },
    deleteRecept(receptId) {
      const authToken = cookies.get('authToken');
      axios.post('http://127.0.0.1:8000/api/obrisirec', {
        recept_id: receptId,
      }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then(response => {
        console.log('Recept je uspješno izbrisan:', response);
        this.$emit('recept-izbrisan'); // Emitujte događaj
      }).catch(error => {
        console.error('Došlo je do pogreške prilikom brisanja recepta:', error);
      });
    },
    editRecept(receptId) {
  // Spremite ID recepta
  accountStore.actions.setReceptId(receptId);
  
  // Navigirajte na rutu /uredirecept
  this.$router.push({ path: `/uredirecept` });
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
  font-style: oblique;
  font-weight: bold;
  color: #FF6347; /* Tomato */
  text-shadow: 1px 1px #ff1b3d; /* Tomato */
  font-size: 1.3rem; /* Smanjena veličina naslova */
 
  text-align: center;
}

.card-buttons {
  visibility: hidden;
  display: flex;
  justify-content: center; /* Centriranje dugmadi */
  
  margin-bottom: 10px; /* Smanjen razmak ispod naslova */
}

.delete-button,
.edit-button {
  padding: 5px 10px;
  margin: 0 5px; /* Smanjen razmak između dugmadi */
  border: none;
  border-radius: 5px;
  background-color: #FF6347;
  color: white;
  cursor: pointer;
}

.delete-button:hover,
.edit-button:hover {
  
  background-color: #ff1b3d;
}
.card:hover .card-buttons {
  visibility: visible; /* Prikaz dugmadi kada se prelazi preko kartice */
}

.card-hover:hover {
  transform: scale(1.05);
  
}
</style>
