<template>
  <v-carousel hide-delimiters show-arrows="hover" height="700">
    <v-carousel-item src="./images/jj-banner-1.jpg" cover style="width:200px;height:auto;"></v-carousel-item>
    <!-- <v-carousel-item src="/images/jj-banner-2.png"  style="width:200px;height:auto;"></v-carousel-item>
    <v-carousel-item src="/images/jj-banner-3.jpg"  style="width:200px;height:auto;"></v-carousel-item> -->
  </v-carousel>

  <v-card class="mx-auto" max-width="800">
    <v-container fluid>
      <v-row dense>
        <v-col :cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Ju-Jitsu Kuolung Knokke-Heist
                </v-card-title>

                <v-card-subtitle>Zelfverdediging voor jong en oud. <br /> Bij vragen kan je ons steeds een bericht sturen via onderstaande knop.</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small" router to="/contact">
                    Stel een vraag
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="200" rounded="0">
                <v-img src="./images/shido_tempel.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col :cols="6">
          <v-card>
              <v-img src="./images/vjjf.jpg" height="400px" aspect-ratio="1" class="align-end">      
                          
              </v-img>
              <v-card-title class="text-black" >VJJF</v-card-title>
              <v-card-subtitle>Kuolung is onderdeel van de Vlaamse Ju-Jitsu Federatie.</v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-link" href="https://www.vjjf.be/" target="_blank"></v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
        <v-col :cols="6">
          <v-card>
              <v-img src="./images/sport-vlaanderen.png" height="400px" class="align-end">      
                          
              </v-img>
              <v-card-title class="text-black" >Sport Vlaanderen</v-card-title>
              <v-card-subtitle>Erkende sportclub bij Sport Vlaanderen.</v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-link" href="https://www.sport.vlaanderen/" target="_blank"></v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <FooterCustom/>
</template>

<script setup lang="ts">
import FooterCustom from '../components/FooterCustom.vue'; // TODO when calendar is fixed we can move this to app.vue
</script>

<style scoped>
.transparent {
  background-color: white !important;
  border-color: transparent !important;
}
</style>

