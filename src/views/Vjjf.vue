<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Vlaamse Ju-Jitsu Federatie vzw
            </h1>
        </div>
    </v-parallax>

    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="5" class="d-flex justify-center">
                <p class="text-md-left">
                    Onze club is aangesloten bij de Vlaamse Ju-Jitsu Federatie vzw. De V.J.J.F. vzw is een overkoepelend orgaan van en voor Vlaamse ju-jitsuclubs. Ze verenigt recreatieve en competitieve clubs en houdt ook rekening met de verschillende stijlen ju-jitsu van de clubs. Elke club kan zo haar eigenheid en zelfstandigheid bewaren, waarbij kwaliteit centraal staat. De V.J.J.F. vzw wenst samen met haar clubs de sport ju-jitsu uit te bouwen tot een grote en bekende sport in Vlaanderen.
                    <br />
                    <br />
                    Binnen de V.J.J.F. vzw werd oorspronkelijk slechts één ju-jitsu stijl beoefend en dit onder leiding van François Van Haesendonck.
Enkele jaren geleden werd binnen de V.J.J.F. vzw het “Regenboogplan” boven de doopvont gehouden. Het Regenboogplan werd vanuit de “stijl Van Haesendonck” gelanceerd met de bedoeling meer openheid te creëren om zodoende meer stijlen te kunnen aansluiten binnen de federatie. Het is namelijk een vaststaand gegeven dat er binnen onze sport verschillende stijlen bestaan en dus ook verschillende manieren om ju-jitsu te beoefenen. Dit feit wordt erkend en gevisualiseerd in de regenboog: een regenboog is één geheel, maar bestaat toch uit verschillende kleuren. Momenteel overkoepelt de V.J.J.F. vzw een twintig tal stijlen.
                    <br />
                    <br />
                    Binnen onze club wordt moderne ju-jitsu beoefend. Binnen de verscheidenheid aan stijlen en club in de V.J.J.F. vzw bevinden we ons in de stijl F.V.H. Open systeem. F.V.H. zijn de initialen van een van de grondleggers van Ju-Jitsu in Vlaanderen: François Van Haesendonck. Het “Open systeem” slaat op het open karakter naar andere stijlen en invloeden. Ju-Jitsu is immers een dynamisch gegeven.
                    <br />
                    <br />
                    Bron:
                    <br />
                    <a href="https://www.vjjf.be/stijl.html" target="_blank">VJJF website</a>,  geraadpleegd op 8 januari 2021
                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="1" class="d-flex justify-center">
                <v-img cover src="./images/vjjf.jpg"></v-img>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
    <FooterCustom/>
</template>

<script setup lang="ts">
import FooterCustom from '../components/FooterCustom.vue'; 
</script>