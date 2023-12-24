<template>
    <v-app-bar :elevation="8">
        <template v-slot:prepend>
            <v-app-bar-nav-icon><v-icon>mdi-home</v-icon></v-app-bar-nav-icon>
        </template>
        <!-- <v-spacer></v-spacer> -->
        <v-app-bar-title>Kuolung</v-app-bar-title>
        <v-btn>FOTOS</v-btn>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    JU-JITSU
                    <template v-slot:append>
                        <v-icon>mdi-menu-down</v-icon>
                    </template>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in menuItemsJuJitsu" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    OVER ONS
                    <template v-slot:append>
                        <v-icon>mdi-menu-down</v-icon>
                    </template>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in menuItemsAboutUs" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn>KALENDER</v-btn>

        <template v-slot:append>
            <v-btn icon="mdi-instagram"></v-btn>

            <v-btn icon="mdi-facebook"></v-btn>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let menuItemsJuJitsu = ref([
    { title: 'Wat is Ju-Jitsu?' },
    { title: 'Vlaamse Ju-Jitsu Federatie vzw' },
]);
let menuItemsAboutUs = ref([
    { title: 'Trainingsuren' },
    { title: 'Lidgeld en verzekering' },
    { title: 'Wie is wie' },
]);

// https://codepen.io/pumax/pen/XvKEyP
</script>