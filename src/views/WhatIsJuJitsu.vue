<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Wat is Ju-Jitsu?
            </h1>
        </div>
    </v-parallax>

    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="5" class="d-flex justify-center">
                <p class="text-md-left">
                    <!-- https://theultimatecoder.com/how-to-use-other-font-family-in-vuetify-3/ -->

                    Ju-Jitsu is een Japanse zelfverdedigingskunst waarmee men in een paar seconden een aanvaller kan
                    controleren of uitschakelen.
                    <br />
                    <br />
                    Het woord Ju-Jitsu kan men op verschillende manieren schrijven. Dit omdat het vertaald wordt op basis
                    van een gesproken Japans woord. Volgende schrijfwijzen komen eveneens voor: Jiu-Jitsu, Ju-jutsu. Het
                    woord bestaat uit twee klanken, die we kunnen vertalen naar twee woorden. Ju betekent voorzichtig of
                    zacht terwijl Jitsu voor kunst en techniek staat. Ju-Jitsu betekent dus zachte kunst of soepele
                    techniek.
                    <br />
                    <br />
                    Ju-Jitsu kent zijn oorsprong in Japan en was een verzameling van verschillende gevechtskunsten. Deze
                    werden gebruikt op het slagveld, waar vaak man aan man gevechten ontstonden zonder wapens. In
                    tegenstelling tot de omliggende landen werd de nadruk hier niet gelegd op slag- en stoottechnieken maar
                    op worpen, klemmen en wurgingen. Dit omdat de slagen en stoten vaak niet efficiënt bleken tegen een
                    persoon met een harnas. In tegenstelling tot de westerse wereld duurde het in Japan veel langer voor
                    vuurwapens werden gebruikt. Dit in combinatie met het verbod op wapendracht zorgde ervoor dat
                    zelfverdediging met de blote hand in Japan een volledige bloei kende en werden deze disciplines veel
                    verder uitgediept. Bij heel wat technieken is het dan ook niet moeilijk om je een zwaard of ander wapen
                    voor te stellen.
                    <br />
                    <br />
                    Ju-Jitsu legde ook de basis voor heel wat andere gevechtsporten, enkele van de meest gekende: Aikido,
                    Judo, Brazilian Jiu-Jitsu, Sambo, etc.
                    <br />
                    <br />
                    Bronnen:
                    <br />
                    VJJF vzw. Ju-Jitsu-Do (5e herziene druk).
                    https://en.wikipedia.org/wiki/Jujutsu, geraadpleegd op 15 augustus 2015
                    https://nl.wikipedia.org/wiki/Jiujitsu, geraadpleegd op 13 september 2015

                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="5" class="d-flex justify-center">
                <v-img :width="300" aspect-ratio="16/9" cover src="./images/jj-varia-1.jpg"></v-img>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
    <FooterCustom/>
</template>

<script setup lang="ts">
import FooterCustom from '../components/FooterCustom.vue'; 
</script>