<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Wie is wie
            </h1>
        </div>
    </v-parallax>
    <v-row>
        <!-- <v-col cols="5"> -->
        <v-card class="mx-auto" max-width="1200">
            <v-container fluid>
                <v-row dense>
                    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                        <v-card>
                            <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="600px" cover>
                                
                            </v-img>
                            <v-card-title class="text-black" v-text="card.title"></v-card-title>

                            <v-card-text>
                                <v-list :items="card.notes"></v-list>
                            </v-card-text>

                            <!-- <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

                                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

                                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                            </v-card-actions> -->
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <!-- </v-col> -->

    </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let cards = ref([
    { title: 'Bart De Sloovere', src: './images/jj-wie-bds.jpg', flex: 4, notes: ['3de dan Ju-Jitsu stijl FVH Open Systeem', 'Voorzitter', 'Hoofdtrainer'] },
    { title: 'David Reubens', src: './images/jj-wie-dr.jpg', flex: 4, notes: ['2de dan Ju-Jitsu stijl FVH Open Systeem', 'Trainer / jeugdtrainer', 'VTS initiator Ju-Jitsu'] },
    { title: 'Ad-Jan Willemsen', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', flex: 4, notes: ['2de dan Ju-Jitsu stijl FVH Open Systeem', 'Trainer'] },
    { title: 'Sander Borny', src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', flex: 4, notes: ['1ste dan Ju-Jitsu stijl FVH Open Systeem', 'Jeugdtrainer'] },
    { title: 'Ryan Lodens', src: './images/jj-wie-rl.jpg', flex: 4, notes: ['1ste dan Ju-Jitsu competitie', 'Hoofdtrainer fighting'] },
    { title: 'Pieter Musschoot', src: './images/jj-wie-pm.jpeg', flex: 4, notes: ['1ste kyu', 'Trainer'] },
    { title: 'Lazlo Ackerman', src: './images/jj-wie-la.jpg', flex: 4, notes: ['2de kyu'] },
    { title: 'Yentl Van Lersberghe', src: './images/jj-wie-yvl.jpg', flex: 4, notes: ['2de kyu', 'Jeugdcoördinator', 'Jeugdtrainer'] },
    { title: 'Thomas Crabbe', src: './images/jj-wie-tc.jpg', flex: 4, notes: ['2de kyu', 'Jeugdtrainer'] },
    { title: 'Tamara Verbeke', src: './images/jj-wie-tv.jpg', flex: 4, notes: ['5de kyu', 'Administratie', 'Vertrouwenspersoon', 'Telefoon: 0496 47 40 84'] },
]);
</script>