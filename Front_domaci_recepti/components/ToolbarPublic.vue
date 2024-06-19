<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import accountStore from '@/composables/accountStore'; // Prilagodite putanju prema vašem stvarnom položaju

const drawer = ref(false);
const isMobile = ref(false);
const isAppInitialized = ref(false); // Novi ref za praćenje je li aplikacija inicijalizirana
const router = useRouter();

const links = [
  { ime: 'Domaci recepti', ruta: '/', icon: 'mdi-home' },
  { ime: 'Predjela', ruta: '/predjela', icon: 'mdi-food-apple' },
  { ime: 'Glavna jela', ruta: '/glavnajela', icon: 'mdi-food-steak' },
  { ime: 'Deserti', ruta: '/deserti', icon: 'mdi-food-croissant' },
  { ime: 'Pretraži', ruta: '/search', icon: 'mdi-magnify' },
  { ime: 'Profil', ruta: '/profil', icon: 'mdi-account', action: 'redirectToProfile' }
];

const drawerIcon = computed(() => (drawer.value ? 'mdi-chevron-left' : 'mdi-menu'));

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 1024;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
  isAppInitialized.value = true; // Postavite na true nakon što je aplikacija inicijalizirana
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});

const closeDrawerOnLargeScreen = () => {
  if (!isMobile.value) {
    drawer.value = false;
  }
};

const redirectToProfile = () => {
  if (isMobile.value) {
    drawer.value = false; // Zatvori drawer na mobilnim uređajima
  }
  if (accountStore.getters.isLoggedIn()) {
    router.push('/profil');
  } else {
    router.push('/login');
  }
};

watch(() => router.currentRoute.value.path, () => {
  if (isMobile.value) {
    drawer.value = false; // Zatvori drawer kod promjene rute na mobilnim uređajima
  }
});
</script>

<template>

  <v-app-bar fixed app height="80" color="#C87C36">
    <div style="display: flex; align-items: center;">
      <img class="tw-max-h-[80px]" src="/img/icon-hat.svg" style="margin-left: 20px"/>
      <nuxt-link v-if="!isMobile && isAppInitialized" to="/" class="dm" style="margin-left: 10px">Domaći recepti</nuxt-link>
    </div>
    <v-spacer class="mb-8" />
    <div v-if="!isMobile && isAppInitialized">
      <nuxt-link to="/predjela" class="t1" style="margin: 0">Predjela</nuxt-link>
      <nuxt-link to="/glavnajela" class="t1">Glavna jela</nuxt-link>
      <nuxt-link to="/deserti" class="t1">Deserti</nuxt-link>
    </div>
    <v-spacer />
    <div v-if="!isMobile && isAppInitialized" class="vl" style="display: flex; align-items: center; font-size: 1.7em">
      <nuxt-link style="padding-right: 10px" to="/search">
        <v-icon>mdi mdi-magnify</v-icon>
      </nuxt-link>
      <div>
        <v-icon @click="redirectToProfile">mdi mdi-account</v-icon>
      </div>
    </div>

    <v-btn v-if="isMobile" icon @click.stop="drawer = !drawer">
      <v-icon>{{ drawerIcon }}</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-if="isAppInitialized" v-model="drawer" app temporary @click="closeDrawerOnLargeScreen">
    <v-list>
      <v-list-item v-for="(link, index) in links" :key="index" @click="link.action === 'redirectToProfile' ? redirectToProfile() : router.push(link.ruta)" link>
        <div style="display: flex; align-items: center;">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="padding-left: 5px">{{ link.ime }}</v-list-item-title>
          </v-list-item-content>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-sheet min-height="100vh" rounded="lg">
            <router-view></router-view>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

</template>

<style scoped>
.t1 {
  color: #FFF;
  font-family: 'Segoe Script', cursive;
  font-size: 22px;
  font-style: normal;
  line-height: normal;
  margin-left: 20px;
}

.t1:hover {
  border-bottom: 3px solid white;
}

.dm {
  color: #FFF;
  font-family: 'Segoe Script', cursive;
  font-size: 30px;
  font-style: normal;
  line-height: normal;
  margin-left: 20px;
}

.vl {
  margin-right: 2rem;
  width: 5rem;
}
</style>
