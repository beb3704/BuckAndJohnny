<template>
    <div class="relative bg-white max-w-4xl m-auto mt-6">
        <transition name="fade" mode="out-in">
            <div class="lg:px-3" key="1" v-if="!data.submitted || data.submitting">
                <div class="grid lg:grid-cols-2">
                    <div class="m-2">
                        <input v-model="data.name"
                            class="shadow appearance-none text-bodyCopy  bg-[#E6E7E8]  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Full Name" />
                    </div>

                    <div class="m-2">
                        <input v-model="data.date"
                            class="shadow appearance-none text-bodyCopy  bg-[#E6E7E8]  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Date Requested" />
                    </div>

                    <div class="m-2">
                        <input v-model="data.phone"
                            class="shadow appearance-none text-bodyCopy  bg-[#E6E7E8]  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Phone" />
                    </div>

                    <div class="m-2">
                        <input v-model="data.numberOfguests"
                            class="shadow appearance-none text-bodyCopy bg-[#E6E7E8]  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Number of Guests" />
                    </div>

                    <div class="m-2">
                        <input v-model="data.email"
                            class="shadow appearance-none text-bodyCopy l bg-[#E6E7E8]  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="E-Mail" />
                    </div>

                    <div class="m-2">
                        <input v-model="data.description"
                            class="shadow appearance-none text-bodyCopy  bg-[#E6E7E8]  w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Brief Description of your Gathering" />
                    </div>

                </div>
                <div v-on:click="submit()" class="cursor-pointer">
                    <NuxtImg format="webp" quality="70" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="submit.png" class="h-auto w-60 m-auto mt-10" alt="The Upstairs Room Interio0r"></NuxtImg>
                </div>

                <div class="text-gray-500 text-center text-xs text-[#E6E7E8] mt-6">This site is protected by reCAPTCHA
                    and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a>
                    and
                    <a href="https://policies.google.com/terms">Terms of Service</a>
                    apply.
                </div>
            </div>
            <div key="2" class="px-5 flex-grow flex justify-center items-center text-2xl py-16" v-else>
                <div class="text-bodyCopy">
                    Thanks for contacting us. Someone will get with you as soon as
                    possible.
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';
const { vueApp } = useNuxtApp();
vueApp.use(VueReCaptcha, {
    siteKey: '6LcbLK8UAAAAAMlZEKJF2cVWoclXn2mjL9o5aJ1Z',
    loaderOptions: {
        autoHideBadge: true,
    },
});

let recaptcha = {} as any;

const appConfig = useAppConfig();
const data = reactive({
    recaptcha: {},
    submitting: false,
    submitted: false,
    name: "",
    phone: "",
    date: "",
    numberOfguests: "",
    email: "",
    description: "",
})

async function submit() {
    let componentToken = await recaptcha?.executeRecaptcha('login');
    let postObject = {
        formName: "Quick Contact",
        name: data.name,
        emailsOverride: ["bucknjohnnys.rhondabranch@gmail.com"],
        reCaptchaKey: componentToken,
        dictionary: {
            Name: data.name,
            Phone: data.phone,
            Date: data.date,
            GuestCount: data.numberOfguests,
            Email: data.email,
            Description: data.description,
        },
        licenseKey: appConfig.licenseKey,
    };

    const response = await useFetch(`https://rrapibeta.azurewebsites.net/api/email/contactform`, {
        method: "POST",
        body: postObject,
        headers: {
            "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': 'true',
            "Access-Control-Allow-Headers": '*',
            "Access-Control-Expose-Headers": '*'
        }
    })

    data.submitted = true;
}

onMounted(async () => {
    recaptcha = useReCaptcha();
    await recaptcha?.recaptchaLoaded();
})

</script>

<style scoped>
input::placeholder {
    @apply text-[#000]
}
</style>