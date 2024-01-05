<template>
    <v-footer color="primary lighten-1" app inset padless absolute width="auto">
        <div class="text-center w-100">
            <strong>{{ new Date().getFullYear() }}</strong> — <strong>Ju Jitsu Kuo-Lung Knokke-Heist vzw</strong> —
            <v-btn icon="mdi-facebook" variant="text" size="large" href="https://www.facebook.com/kuolungknokke/"
                target="_blank"></v-btn>
            <v-btn icon="mdi-instagram" variant="text" size="large" href="https://www.instagram.com/kuolungknokkeheist/"
                target="_blank"></v-btn>
        </div>
    </v-footer>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router'

// const router = useRouter()

// let currentPathObject = router.currentRoute.value; 
// console.log(currentPathObject);
</script>