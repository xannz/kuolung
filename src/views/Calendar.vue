<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
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
          title: 'Start traingingen jeugd',
          start: new Date('2024-09-07 9:30'),
          end: new Date('2024-09-07 12:30'),
          color: colors.value[1],
        },
      {
        title: 'Start trainingen fighting',
        start: new Date('2024-09-04 09:30'),
        end: new Date('2024-09-04 12:30'),
        color: colors.value[2],
      },
      {
        title: 'Start trainingen volwassenen',
        start: new Date('2024-09-02 09:30'),
        end: new Date('2024-09-02 12:30'),
        color: colors.value[0],
      },
      {
        title: 'Vrijetijdsmarkt tuinen Scharpoord',
        start: new Date('2024-09-15 10:00'),
        end: new Date('2024-09-15 17:00'),
        color: colors.value[3],
      },
      {
        title: 'Spaghetti-avond',
        start: new Date('2024-10-12 18:00'),
        end: new Date('2024-10-12 23:00'),
        color: colors.value[3],
      },
      {
        title: 'Jeugd Sport Weekend',
        start: new Date('2024-11-15 18:00'),
        end: new Date('2024-11-17 17:00'),
        color: colors.value[1],
      },
      {
        title: 'Sinterklaas & familiedag (Laguna Duinbergen)',
        start: new Date('2024-12-07 10:00'),
        end: new Date('2024-12-07 18:00'),
        color: colors.value[3],
      },
      {
        title: 'Kuo Lung On Ice (schaatspiste A. Verweeplein)',
        start: new Date('2024-12-21 19:00'),
        end: new Date('2024-12-21 22:00'),
        color: colors.value[3],
      },
      {
        title: 'Let The Games Begin',
        start: new Date('2025-03-01 10:00'), //datum nog niet gegeven
        end: new Date('2025-03-31 17:00'),
        color: colors.value[2],
      },
      {
        title: 'Ardennen Weekend (16+, geboren in 2009 of eerder)',
        start: new Date('2025-05-28 10:00'),
        end: new Date('2025-06-02 17:00'),
        color: colors.value[0],
      },
      {
        title: 'Souper',
        start: new Date('2025-06-21 18:00'),
        end: new Date('2025-06-21 23:00'),
        color: colors.value[3],
      },
      {
        title: 'West-Vlaams Open',
        start: new Date('2025-09-27 09:00'),
        end: new Date('2025-09-28 18:00'),
        color: colors.value[2],
      }
      ]
);
</script>