<template>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thick mb-4">
        Lidgeld en Verzekering
      </h1>
    </div>
  </v-parallax>

  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="5">
        <h1 class="text-h4 font-weight-thick mb-4">
          Jaarlijkse lidmaatschapsbijdrage
        </h1>
        <v-list :items="fees" item-props lines="three">
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>
        <br />
        <p>
          Wanneer een gezinslid reeds traint bij onze club, krijgen andere gezinsleden een korting van € 15 op het lidgeld.
        </p>
        <br />
        <p>
          Betalen in schijven is steeds mogelijk mits overleg.
        </p>
        <br />
        <p>
          U kunt voor het lidgeld doorgaans ook een kleine compensatie genieten bij uw mutualiteit. Neem hiervoor contact op met Tamara, zij zal de nodige documenten voorzien.
        </p>
        <br />
        <p>
          we werken voor het eerst samen met ©UitPAS!
        </p>
        <br />
        <p>
          Voor meer info: <a href="https://www.knokke-heist.be/uitpas" target="_blank"> https://www.knokke-heist.be/uitpas </a>  of neem contact op met Tamara.
        </p>
        <br />
        <p>
          De eerste twee kennismakingslessen zijn gratis. Profiteer van dit aanbod en kom gerust eens met ons meetrainen.
        </p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="5">
        <h1 class="text-h4 font-weight-thick mb-4">
          Verzekering
        </h1>
        <br />
        <p>
          Iedereen die Ju-Jitsu wil beoefenen moet zich aansluiten bij de Vlaamse Ju-Jitsu Federatie, waarin een sportverzekering vervat zit: 25 Euro. Dit zit al inbegrepen bij het inschrijvingsgeld.
        </p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="5">
        <h1 class="text-h4 font-weight-thick mb-4">
          Sportmedische keuring
        </h1>
        <br />
        <p>
          Alle leden dienen in het bezit te zijn van een recent doktersattest. Zo’n attest (van de huisarts) bevestigt dat het lid in goede conditie verkeert om Ju-Jitsu te beoefenen.
          Leden die deelnemen aan competitie moeten over een jaarlijks hernieuwd attest beschikken. Zoniet kunnen ze niet deelnemen aan kampioenschappen.
        </p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
  <FooterCustom/>
</template>

<script setup lang="ts">
import FooterCustom from '../components/FooterCustom.vue';
import { ref } from 'vue';

let fees = ref([
  {
    prependIcon: 'mdi-numeric-1-circle',
    title: 'Jeugd (jonger dan 2009)',
    subtitle: `150 Euro (125 lidgeld + 25 verzekering)`,
  },
  {
    prependIcon: 'mdi-numeric-2-circle',
    title: 'Volwassenen',
    subtitle: `200 Euro (175 lidgeld + 25 verzekering)`,
  },
  {
    prependIcon: 'mdi-numeric-3-circle',
    title: 'Combinatie stijltraining en fighting',
    subtitle: `300 Euro (275 lidgeld + 25 verzekering)`,
  },
  {
    prependIcon: 'mdi-numeric-4-circle',
    title: 'Beurtenkaart (7 + 1)',
    subtitle: `60 Euro, ook bij de aankoop van een beurtenkaart dient de verzekeringskost van € 25 op jaarbasis betaald te worden.`,
  },
]);
</script>