<template>
    <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thick mb-4">
                Contact
            </h1>
        </div>
    </v-parallax>


    <v-sheet width="600" class="mx-auto">
        <v-form @submit.prevent v-model="valid" ref="contactForm" validate-on="input">
            <v-text-field v-model="name" label="Naam" :rules="nameRules"></v-text-field>
            <v-text-field v-model="email" label="Email" :rules="emailRules"></v-text-field>
            <v-textarea name="input-7-1" variant="filled" label="Bericht" auto-grow v-model="message"
                :rules="messageRules"></v-textarea>
            <v-btn type="submit" block class="mt-2" @click="sendContactMessage" :loading="loading"
                :disabled="disableSendBtn">Verstuur</v-btn>
        </v-form>
    </v-sheet>
    <v-alert width="600" class="mx-auto" v-if="showErrorMessage" type="error">Er is iets verkeerd gegaan aan onze kant.
        Probeer het later opnieuw.</v-alert>
    <v-alert width="600" class="mx-auto" v-if="showSuccessMessage" type="success">Bericht verzonden. We proberen zo snel
        mogelijk te antwoorden.</v-alert>
        <FooterCustom/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FooterCustom from '../components/FooterCustom.vue'; 

let showErrorMessage = ref(false);
let showSuccessMessage = ref(false);
let disableSendBtn = ref(false);

let valid = ref(false);
let name = ref('');
let message = ref('');
let email = ref('');
let nameRules = ref([
    (v: string) => !!v || 'Naam is verplicht.',
]);
let emailRules = ref([
    (v: string) => !!v || 'Email is verplicht.',
    (v: string) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Voer een geldig email in.',
]);
let messageRules = ref([
    (v: string) => !!v || 'Bericht is verplicht',
]);
let loading = ref(false);
let contactForm = ref();

async function sendContactMessage() {
    // https://docs.google.com/forms/d/e/1FAIpQLSeY6XvuV_1wwogPpKoV2CW1sUXljEG2pUYO_MkP_XIAaYgDPg/formResponse
    // entry.1505002009 => name
    // entry.713422512 => email
    // entry.2032735164 => message

    // TODO Captcha check

    let validForm  = await contactForm.value.validate()
    if (!validForm.value) {
        return;
    }

    loading.value = true;
    const data = new FormData()
    data.append("entry.1505002009", name.value);
    data.append("entry.713422512", email.value);
    data.append("entry.2032735164", message.value);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeY6XvuV_1wwogPpKoV2CW1sUXljEG2pUYO_MkP_XIAaYgDPg/formResponse', {
        method: 'post',
        mode: 'no-cors',
        body: data
    }).then(response => {
        showSuccessMessage.value = true;
        disableSendBtn.value = true;
        console.log(response);
    }).catch(error => {
        showErrorMessage.value = true;
        console.log(error);
    }).finally(() => {
        loading.value = false;
    });

}

</script>