<template>
  <div class="recept-container">
    <h1 class="naslov">{{ recept.naziv_recepta }}</h1>

    <hr style="height: 1px; color: black; width: 100%">

    <div class="slika-container">
      <img :src="'http://pzi202024.studenti.sum.ba/backend/' + recept.slika" alt="Slika recepta">
    </div>
    <h2 class="opis">{{ recept.opis }}</h2>

    <div class="ocjene">
      <p>Prosječna ocjena:
        <span v-for="n in 5" :key="n" class="star">
          <i v-if="n <= recept.prosjecnaOcjena" class="fas fa-star"></i>
          <i v-else class="far fa-star"></i>
        </span>
        &nbsp;<span>{{ recept.prosjecnaOcjena.toFixed(1) }}</span>
      </p>
      <div v-if="accountStore.getters.isLoggedIn()">
        <p>Ocijenite recept:
          <div class="star-rating">
            <span v-for="(star, index) in stars" :key="index" class="star"
                  @mouseover="setRating(index + 1)"
                  @mouseout="setRating(rating)"
                  @click="submitRating(index + 1)">
              <i :class="star" class="star-mar"></i>
            </span>
          </div>
        </p>
      </div>
    </div>
    <div class="pisanjeKomentara" v-if="accountStore.getters.isLoggedIn()">
      <form @submit.prevent="submitKomentar">
        <textarea class="komentarField" v-model="noviKomentar" placeholder="Unesite svoj komentar ovdje"></textarea>
        <br>
        <button type="submit" class="komentarSend">Pošalji komentar</button>
      </form>
    </div>
    <div v-for="komentar in recept.komentari" :key="komentar.datum_Komentara" class="komentar">
      <p class="komKorIme">{{ komentar.korisnicko_ime }}</p>
      <p>{{ komentar.sadržaj }}</p>
      <p>{{ komentar.datum_Komentara }}</p>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios';
import accountStore from '@/composables/accountStore';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default {
  props: {
    recept: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      noviKomentar: '',
      ocjena: 0,
      stars: Array(5).fill('far fa-star'),
      rating: 0
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
      this.stars = this.stars.map((star, index) => {
        if (index < rating) {
          return 'fas fa-star';
        } else if (index < rating) {
          return 'fas fa-star-half-alt';
        } else {
          return 'far fa-star';
        }
      });
    },
    submitRating(rating) {
      const authToken = cookies.get('authToken');
      axios.post('http://pzi202024.studenti.sum.ba/backend/api/ocjena', {
        recept_id: this.recept.recept_id,
        ocjena: rating
      }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .then(() => {
        this.ocjena = rating;
        alert('Uspješno dodana ocjena!');
      })
      .catch(error => {
        console.error(error);
      });
    },
    submitKomentar() {
      const authToken = cookies.get('authToken');
      axios.post('http://pzi202024.studenti.sum.ba/backend/api/komentari', {
        idrecepta: this.recept.recept_id,
        sadržaj: this.noviKomentar
      }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .then(() => {
        this.noviKomentar = '';
        alert('Uspješno dodan komentar!');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>


<style scoped>
.recept-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slika-container {
  display: flex;
  max-width: 800px; /* Ovo je veličina okvira u kojem će se slika prikazivati */
  max-height: 800px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden; /* Ovo će osigurati da se slika ne prelijeva iz okvira */
}

.slika-container img {
  width: 100%; /* Slika će se prilagoditi veličini okvira */
  height: auto;
  object-fit: cover;
}

.recept-container .naslov {
  font-size: 2.5em; /* Povećajte veličinu naslova */
  text-transform: uppercase;
  font-style:oblique;
  font-weight: bold;
  color: #FF6347; /* Tomato */
  text-shadow: 1px 1px #ff1b3d; /* Tomato */
}

.recept-container .opis {
  font-size: 1.3em; /* Povećajte veličinu opisa */
}

.recept-container p {
  width: 100%;
  max-width: 600px; /* Prilagodite ovo prema potrebi */
}

.komentar {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 15px; /* Komentar u oblaku */
}

.ocjene{
  padding: 20px;
}

.star {
  color: gold;
}

.star-mar{
  margin-right: 1px;
  margin-left: 1px;
}

.opis{
  padding: 30px;
  text-align: justify;
  max-width: 1000px;
  font-weight: lighter;
  font-style: oblique;
}

.komKorIme{
  font-size: large;
  font-weight: bolder;
}

.pisanjeKomentara{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
}
.komentarField{
  height: 100px;
  width: 600px;
  border: black dashed 1px;
  border-radius: 1rem;
  padding: 5px;
}

.komentarSend{
  background-color: #FF6347;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 3px;
}

</style>
