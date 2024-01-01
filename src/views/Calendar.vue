<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Trainingsuren
            </h1>
        </div>
    </v-parallax>

    <v-container>
        <v-row>
            <v-col cols="10" class="mx-auto">
                <v-calendar></v-calendar>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script setup lang="ts">
import { VCalendar } from 'vuetify/labs/VCalendar'



</script>