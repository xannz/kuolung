<template>
  <v-app>
    <v-main>
      <Navigation/>
      <router-view/>      
    </v-main>    
  </v-app>
  
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>
