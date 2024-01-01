<template>
  <v-carousel hide-delimiters show-arrows="hover" height="700">
    <v-carousel-item src="./images/jj-banner-1.jpg" cover style="width:200px;height:auto;"></v-carousel-item>
    <!-- <v-carousel-item src="/images/jj-banner-2.png"  style="width:200px;height:auto;"></v-carousel-item>
    <v-carousel-item src="/images/jj-banner-3.jpg"  style="width:200px;height:auto;"></v-carousel-item> -->
  </v-carousel>

  <div>
    <v-container>
      <v-row style="margin-top: 20px; margin: auto; max-width: 1200px;" justify="center">
        <v-col>
          <v-card class="mx-auto" max-width="400" elevation="1">
            <v-img height="200" src="./images/shido_tempel.jpg" contain class="transparent">
            </v-img>
            <v-card-title>Ju-Jitsu Club Kuolung Knokke-Heist</v-card-title>
            <v-card-subtitle class="pb-0">
              
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" variant="text" @click="">
                Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="400" elevation="1">
            <v-img height="200" src="./images/vjjf.jpg" contain class="transparent">
            </v-img>
            <v-card-title>Vlaamse Ju-Jitsu Federatie</v-card-title>
            <v-card-text>
              Kuolung is deel van de VJJF. De Vlaamse Ju-Jitsu Federatie vzw heeft als missie het verenigen van alle ju-jitsuclubs (zowel recreatief als competitief) in Vlaanderen en het Brussels Hoofdstedelijk Gewest in 1 kwalitatief hoogstaande federatie. Het is de bedoeling alle stijlen en vormen van ju-jitsu onder te brengen in een goed georganiseerde structuur, zodat alle stijlen hun eigenheid en zelfstandigheid kunnen behouden en toch kennis kunnen uitwisselen. Daarnaast wensen wij de sport ju-jitsu uit te bouwen tot een grote en bekende sport in Vlaanderen.
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue" variant="text" @click="">
                Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="400" elevation="1">
            <v-img height="200" src="./images/sport-vlaanderen.png" contain class="transparent">
            </v-img>
            <v-card-title>Sport Vlaanderen</v-card-title>
            <v-card-subtitle class="pb-0">
              Kuolung is deel van Sport Vlaanderen.
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" variant="text" @click="">
                Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.transparent {
    background-color: white !important;
    border-color: transparent !important;
}
</style>

