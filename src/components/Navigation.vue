<template>
    <v-app-bar :elevation="8">
        <template v-slot:prepend>
            <v-app-bar-nav-icon><v-icon>mdi-home</v-icon></v-app-bar-nav-icon>
        </template>
        <!-- <v-spacer></v-spacer> -->
        <v-app-bar-title>Kuolung</v-app-bar-title>
        <v-btn>FOTOS</v-btn>
        <v-btn>JU-JITSU</v-btn>
        <v-btn>OVER ONS</v-btn>
        <v-btn>KALENDER</v-btn>
        <template v-slot:append>
            <v-btn icon="mdi-heart"></v-btn>

            <v-btn icon="mdi-magnify"></v-btn>

            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">


// https://codepen.io/pumax/pen/XvKEyP
</script>