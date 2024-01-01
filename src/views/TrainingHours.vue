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
            <v-spacer></v-spacer>
            <!-- <v-col cols="5" class="d-flex justify-center"> -->
            <v-col cols="5">
                <v-card>
                    <v-tabs v-model="tab" align-tabs="center" centered stacked>
                        <v-tab :value="1"><v-icon>mdi-human-child</v-icon>Jeugd (5-14j)</v-tab>
                        <v-tab :value="2"><v-icon>mdi-account</v-icon>Volwassenen (+14j)</v-tab>
                        <v-tab :value="3"><v-icon>mdi-trophy</v-icon>Fighting competitie</v-tab>
                    </v-tabs>
                    <v-window v-model="tab">
                        <v-window-item :key="1" :value="1">
                            <v-card>
                                <v-list :items="trainingHoursYouth" item-props lines="three">
                                    <template v-slot:subtitle="{ subtitle }">
                                        <div v-html="subtitle"></div>
                                    </template>
                                </v-list>
                            </v-card>
                        </v-window-item>
                        <v-window-item :key="2" :value="2">
                            <v-card>
                                <v-list :items="trainingHoursAdults" item-props lines="three">
                                    <template v-slot:subtitle="{ subtitle }">
                                        <div v-html="subtitle"></div>
                                    </template>
                                </v-list>
                            </v-card>
                        </v-window-item>
                        <v-window-item :key="3" :value="3">
                            <v-card>
                                <v-list :items="trainingHoursCompetition" item-props lines="three">
                                    <template v-slot:subtitle="{ subtitle }">
                                        <div v-html="subtitle"></div>
                                    </template>
                                </v-list>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="5">
                <h1 class="text-h4 font-weight-thick mb-4">
                    Jaaroverzicht
                </h1>
                <br />
                <p>
                    Ju-Jitsu trainingen vangen aan begin september en eindigen eind juni (10 maanden).
                    Tijdens de zomervakantie worden twee strandtrainingen voorzien, waarvan de datum tijdig gemeld zal
                    worden.
                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="5">
                <h1 class="text-h4 font-weight-thick mb-4">
                    Locatie
                </h1>
                <br />
                <p>
                    Sporthal de Stormmeeuw<br />
                    E.Verheyestraat 14<br />
                    8300 Knokke<br />
                </p>
                <br />
                <p>
                    Sporthal Laguna<br />
                    Krommedijk 32<br />
                    8300 Knokke (Duinbergen)<br />
                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let tab = ref(null);
let trainingHoursYouth = ref([
    { type: 'subheader', title: 'Zaterdag' },
    {
        prependIcon: 'mdi-numeric-1-circle',
        title: '09:30 - 10:30',
        subtitle: `<span class="text-primary">Vanaf 5 jaar</span> &mdash; Sporthal de Stormmeeuw`,
    },
    {
        prependIcon: 'mdi-numeric-2-circle',
        title: '10:30 - 11:30',
        subtitle: `<span class="text-primary">Vanaf 10 jaar</span> &mdash; Sporthal de Stormmeeuw`,
    },
    {
        prependIcon: 'mdi-numeric-3-circle',
        title: '11:30 - 12:30',
        subtitle: `<span class="text-primary">Vanaf 13 jaar</span> &mdash; Sporthal de Stormmeeuw`,
    }
]);
let trainingHoursAdults = ref([
    { type: 'subheader', title: 'Maandag' },
    {
        prependIcon: 'mdi-numeric-1-circle',
        title: '20:00 - 21:30',
        subtitle: `<span class="text-primary">Alle volwassenen</span> &mdash; Sporthal Laguna`,
    },
    { type: 'divider', inset: true },
    { type: 'subheader', title: 'Vrijdag' },
    {
        prependIcon: 'mdi-numeric-1-circle',
        title: 'Vrijdag 20:00 - 22:00',
        subtitle: `<span class="text-primary">Alle volwassenen</span> &mdash; Sporthal de Stormmeeuw`,
    }
]);
let trainingHoursCompetition = ref([
    { type: 'subheader', title: 'Woensdag' },
    {
        prependIcon: 'mdi-numeric-1-circle',
        title: '17:30 - 19:00',
        subtitle: `<span class="text-primary">Groep 1</span> &mdash; Sporthal de Stormmeeuw`,
    },
    {
        prependIcon: 'mdi-numeric-2-circle',
        title: '19:00 - 20:30',
        subtitle: `<span class="text-primary">Groep 2</span> &mdash; Sporthal de Stormmeeuw`,
    },
    { type: 'divider', inset: true },
    { type: 'subheader', title: 'Vrijdag' },
    {
        prependIcon: 'mdi-numeric-1-circle',
        title: '17:30 - 18:30',
        subtitle: `<span class="text-primary">Groep 1</span> &mdash; Sporthal de Stormmeeuw`,
    },
    {
        prependIcon: 'mdi-numeric-2-circle',
        title: '18:30 - 20:00',
        subtitle: `<span class="text-primary">Groep 2</span> &mdash; Sporthal de Stormmeeuw`,
    },
    { type: 'divider', inset: true },
    { type: 'subheader', title: 'Zaterdag' },
    {
        prependIcon: 'mdi-numeric-1-circle',
        title: '19:00 - 20:30',
        subtitle: `<span class="text-primary">Alle leeftijden</span> &mdash; Sporthal Laguna`,
    }
]);
</script>