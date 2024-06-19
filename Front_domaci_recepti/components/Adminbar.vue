<template>
    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Administracija</v-toolbar-title>
      </v-app-bar>
  
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item-group>
            <v-list-item @click="$router.push('/')">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Domaci recepti</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="$router.push('/admin/')">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Korisnici</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Dodajte ovdje druge rute -->
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: null,
    }),
  };
  </script>
  