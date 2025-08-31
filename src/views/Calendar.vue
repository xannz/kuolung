<template>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-bold mb-4">
        Kalender
      </h1>
    </div>
  </v-parallax>

  <v-container>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-sheet max-height="400">
          <v-calendar
              ref="calendar"
              v-model="today"
              color="primary"
              view-mode="month"
              :events="events"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const titles = ref(['Adults', 'Youth', 'Competition', 'Event']);
const colors = ref(['blue', 'indigo', 'deep-purple', 'orange']);

// v-calendar expects a string in format YYYY-MM-DD
const today = ref(new Date().toISOString().slice(0, 10));

const events = ref([
  {
    title: 'Start trainingen jeugd',
    start: '2025-09-06T09:30:00',
    end: '2025-09-06T12:30:00',
    color: colors.value[1],
  },
  {
    title: 'Start trainingen fighting',
    start: '2025-09-03T18:00:00',
    end: '2025-09-03T21:00:00',
    color: colors.value[2],
  },
  {
    title: 'Start trainingen volwassenen',
    start: '2025-09-01T20:00:00',
    end: '2025-09-01T22:00:00',
    color: colors.value[0],
  },
  {
    title: 'Vrijetijdsmarkt tuinen Scharpoord',
    start: '2025-09-14T10:00:00',
    end: '2025-09-14T13:00:00',
    color: colors.value[3],
  },
  {
    title: 'Jeugd Sport Weekend',
    start: '2025-11-07T18:00:00',
    end: '2025-11-09T17:00:00',
    color: colors.value[1],
  },
  {
    title: 'Sinterklaas & familiedag (Laguna Duinbergen)',
    start: '2025-12-06T10:00:00',
    end: '2025-12-06T12:00:00',
    color: colors.value[3],
  },
  {
    title: 'Kuo Lung On Ice (schaatspiste A. Verweeplein)',
    start: '2024-12-20T18:00:00',
    end: '2024-12-20T20:00:00',
    color: colors.value[3],
  },
  {
    title: 'Ardennen Weekend (16+, geboren in 2010 of eerder)',
    start: '2026-05-22T10:00:00',
    end: '2026-05-25T00:00:00',
    color: colors.value[0],
  },
  {
    title: 'Souper',
    start: '2025-06-27T18:00:00',
    end: '2025-06-27T23:00:00',
    color: colors.value[3],
  },
  {
    title: 'West-Vlaams Open',
    start: '2025-10-18T09:00:00',
    end: '2025-10-18T18:00:00',
    color: colors.value[2],
  },
]);
</script>
