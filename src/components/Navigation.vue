<template>
    <v-app-bar :elevation="8" v-if="!isMobile">
        <template v-slot:prepend>
            <v-app-bar-nav-icon router to="/"><v-icon>mdi-home</v-icon></v-app-bar-nav-icon>
        </template>
        <!-- <v-spacer></v-spacer> -->
        <v-app-bar-title v-if="!isMobile" style="cursor: pointer" @click="$router.push('/')">Kuolung</v-app-bar-title>
        <v-btn router to="/contact">Contact</v-btn>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    JU-JITSU
                    <template v-slot:append>
                        <v-icon>mdi-menu-down</v-icon>
                    </template>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in menuItemsJuJitsu" :key="index" :value="index" router :to="item.route">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    OVER ONS
                    <template v-slot:append>
                        <v-icon>mdi-menu-down</v-icon>
                    </template>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in menuItemsAboutUs" :key="index" :value="index" router :to="item.route">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn router to="/kalender">KALENDER</v-btn>

        <template v-slot:append>
            <v-btn icon="mdi-instagram" href="https://www.instagram.com/kuolungknokkeheist/" target="_blank"></v-btn>
            <v-btn icon="mdi-facebook" href="https://www.facebook.com/kuolungknokke/" target="_blank"></v-btn>
        </template>
    </v-app-bar>

    <v-app-bar prominent v-if="isMobile">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">Kuolung</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:append>
            <v-btn icon="mdi-instagram" href="https://www.instagram.com/kuolungknokkeheist/" target="_blank"></v-btn>
            <v-btn icon="mdi-facebook" href="https://www.facebook.com/kuolungknokke/" target="_blank"></v-btn>
        </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list>
            <v-list-item prepend-icon="mdi-home" title="Home" router to="/"></v-list-item>
            <v-list-group value="ju-jitsu">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Ju-Jitsu" prepend-icon="mdi-alpha-j"></v-list-item>
                </template>

                <v-list-item v-for="(item, i) in menuItemsJuJitsu" :key="i" :title="item.title" :value="item.title" router :to="item.route"></v-list-item>
            </v-list-group>
            <v-list-group value="over-ons">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Over ons" prepend-icon="mdi-alpha-o"></v-list-item>
                </template>

                <v-list-item v-for="(item, i) in menuItemsAboutUs" :key="i" :title="item.title" :value="item.title" router :to="item.route"></v-list-item>
            </v-list-group>
            <v-list-item prepend-icon="mdi-calendar" title="Kalender" router to="/kalender"></v-list-item>
            <v-list-item prepend-icon="mdi-card-account-mail" title="Contact" router to="/contact"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed, unref } from 'vue'
import { useDisplay } from 'vuetify'

let drawer = ref(false);

// https://stackoverflow.com/questions/60128083/how-to-build-a-responsive-vuetify-app-bar
const display = useDisplay()

const isMobile = computed(() => {
    return unref(display.mobile)
})

let menuItemsJuJitsu = ref([
    { title: 'Wat is Ju-Jitsu?', route: '/wat-is-ju-jitsu' },
    { title: 'Vlaamse Ju-Jitsu Federatie vzw', route: '/vjjf' },
]);
let menuItemsAboutUs = ref([
    { title: 'Trainingsuren', route: '/trainingsuren' },
    { title: 'Lidgeld en verzekering', route: '/lidgeld-en-verzekering' },
    { title: 'Wie is wie', route: '/wie-is-wie' },
]);
</script>