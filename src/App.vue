<template>
  <v-app>
    <navbar v-if="!hiddenNavbarRoutes.includes($route.name)"></navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Navbar from './components/global/navbar/Navbar.vue';
import Vue from 'vue';


export default Vue.extend({
  name: 'App',

  data: () => ({
    hiddenNavbarRoutes: [
      'login',
      'signup',
      'license',
      'skills',
      'location',
      'complete',
    ],
  }),
  components: {
    Navbar,
  },
});
</script>
