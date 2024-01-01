<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Wie is wie
            </h1>
        </div>
    </v-parallax>
    <v-row>
        <!-- <v-col cols="5" v-for="n in 9" :key="n" class="d-flex child-flex" >
            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" cover
                class="bg-grey-lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" justify="center">
                        <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col> -->
    </v-row>
</template>

<script setup lang="ts">
</script>