<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Trainingsuren
            </h1>
        </div>
    </v-parallax>

    <v-container>
        <v-row class="fill-height">
      <v-col>
        <v-sheet height="400">
          <v-calendar
            ref="calendar"
            v-model="today"
            color="primary"
            view-mode="month"
            :events="events"
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
    </v-container>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';

let titles = ref(['Adults', 'Youth', 'Competition', 'Event']);
let colors = ref(['blue', 'indigo', 'deep-purple', 'orange']);
let today = ref([new Date()]);
let events = ref(
    [
        {
          title: 'Fighting Groep 1 (17:30-19:00)',
          start: new Date('2024-01-03 17:30'),
          end: new Date('2024-01-03 19:00'),
          color: 'deep-purple',
        },
        {
          title: 'Fighting Groep 2 (19:00-20:30)', // Visual bug when on an half hour when the calendar is in week view
          start: new Date('2024-01-03 9:30'),
          end: new Date('2024-01-03 10:30'),
          color: 'deep-purple',
        },
      ]

    // {title: 'Adults', start: new Date('2024-01-07'), end: new Date('2024-01-07'), color: 'blue'}
);
</script>