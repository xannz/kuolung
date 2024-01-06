<template>
  <v-carousel hide-delimiters show-arrows="hover" height="600">
    <v-carousel-item src="./images/jj-banner-1.jpg" cover style="width:200px;height:auto;"></v-carousel-item>
    <!-- <v-carousel-item src="/images/jj-banner-2.png"  style="width:200px;height:auto;"></v-carousel-item>
    <v-carousel-item src="/images/jj-banner-3.jpg"  style="width:200px;height:auto;"></v-carousel-item> -->
  </v-carousel>

  <v-card class="mx-auto" max-width="1140px" elevation="0">
    <v-container fluid>
      <v-row dense>
        <v-col :cols="12">
          <v-card elevation="0">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Ju-Jitsu Kuolung Knokke-Heist
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      Jiu-jitsu of ju-jitsu is een Japanse krijgskunst en wordt vertaald als “zachte kunst“, het is een
                      zelfverdedigingskunst waarmee een potentiële aanvaller kan worden uitgeschakeld dan wel
                      gecontroleerd. Je leert je verdedigen tegen verschillende aanvallen alsook verschillende
                      aanvalstechnieken zoals trappen en stoten, klemmen, worpen, wugingen en meer.
                    </v-col>
                    <v-col cols="6">
                      Ju-jitsu is geschikt voor alle leefteden en kan in twee vormen binnen onze club gevolgd worden.
                      Enerzijds heb je de stijltechnische trainingen waar de klassieke ju-jitsu technieken aangeleerd
                      worden en anderzijds de competitie trainingen voor wie aan wedstrijden wil deelnemen.
                    </v-col>
                  </v-row>
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col :cols="4">
          <v-card>
            <v-img src="./images/jj-training.jpg" height="200px" aspect-ratio="1" class="align-end" cover
              style="cursor: pointer" @click="$router.push('/trainingsuren')"></v-img>
            <v-card-title class="text-black text-center" style="cursor: pointer"
              @click="$router.push('/trainingsuren')">Trainingsuren</v-card-title>
            <!-- <v-card-subtitle>Kuolung is onderdeel van de Vlaamse Ju-Jitsu Federatie.</v-card-subtitle> -->
            <!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-link" href="https://www.vjjf.be/" target="_blank"></v-btn>
              </v-card-actions> -->
          </v-card>
        </v-col>
        <v-col :cols="4">
          <v-card>
            <v-img src="./images/jj-membership.jpg" height="200px" class="align-end" cover aspect-ratio="1"
              style="cursor: pointer" @click="$router.push('/lidgeld-en-verzekering')">

            </v-img>
            <v-card-title class="text-black text-center" style="cursor: pointer"
              @click="$router.push('/lidgeld-en-verzekering')">Lidmaatschap</v-card-title>
            <!-- <v-card-subtitle>Erkende sportclub bij Sport Vlaanderen.</v-card-subtitle> -->
            <!-- <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-link" href="https://www.sport.vlaanderen/" target="_blank"></v-btn>
              </v-card-actions> -->
          </v-card>
        </v-col>
        <v-col :cols="4">
          <v-card>
            <v-img src="./images/jj-competition.jpg" height="200px" class="align-end" cover aspect-ratio="1">

            </v-img>
            <v-card-title class="text-black text-center">Competitie</v-card-title>
            <!-- <v-card-subtitle>Erkende sportclub bij Sport Vlaanderen.</v-card-subtitle> -->
            <!-- <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-link" href="https://www.sport.vlaanderen/" target="_blank"></v-btn>
              </v-card-actions> -->
          </v-card>
        </v-col>
        <v-col :cols="6">
          <v-card>
            <a href="https://www.vjjf.be" target="_blank"><v-img src="./images/vjjf.jpg" height="200px" aspect-ratio="1"
                class="align-end" style="cursor: pointer"></v-img></a>
            <a href="https://www.vjjf.be" target="_blank" style="text-decoration: none; color: inherit;"><v-card-title
                class="text-black">VJJF</v-card-title></a>
            <v-card-subtitle>Kuolung is onderdeel van de Vlaamse Ju-Jitsu Federatie.</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-link" href="https://www.vjjf.be/"
                target="_blank"></v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col :cols="6">
          <v-card>
            <a href="https://www.sport.vlaanderen/" target="_blank"><v-img src="./images/sport-vlaanderen.png"
                height="200px" class="align-end"></v-img> </a>
            <a href="https://www.vjjf.be" target="_blank" style="text-decoration: none; color: inherit;"><v-card-title
                class="text-black">Sport Vlaanderen</v-card-title></a>

            <v-card-subtitle>Erkende sportclub bij Sport Vlaanderen.</v-card-subtitle>
            
            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <FooterCustom />
</template>

<script setup lang="ts">
import FooterCustom from '../components/FooterCustom.vue'; // TODO when calendar is fixed we can move this to app.vue
</script>

<style scoped>
.transparent {
  background-color: white !important;
  border-color: transparent !important;
}</style>

