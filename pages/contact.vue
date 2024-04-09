<template>
  <section>
    <Bnjnav></Bnjnav>
    <div class="max-w-6xl m-auto lg:p-20 p-4">
      <div class="grid lg:grid-cols-[1fr_2fr]">
        <div
          class="lg:mr-10 shadow-lg text-center grid grid-rows-[min-content_2fr]"
        >
          <div class="bg-backgroundDark uppercase text-xl text-textLight p-4">
            Location
          </div>
          <div class="grid items-center p-10 gap-10">
            <div>
              <h6 class="text-titles text-xl">PHONE</h6>
              <a
                :href="`tel:${appConfig.contact.phone}`"
                class="uppercase block text-xl text-subTitles"
                >{{ appConfig.contact.phone.replaceAll("-", ".") }}
              </a>
            </div>
            <div>
              <h6 class="text-titles text-xl">ADDRESS</h6>
              <a
                class="block text-titles text-xl"
                :href="`http://maps.google.com/?q=${appConfig.contact.address.street},${appConfig.contact.address.city},${appConfig.contact.address.state},${appConfig.contact.address.zip}`"
              >
                <div class="text-titles text-xl">
                  {{ appConfig.contact.address.street }}
                </div>
                <div class="text-titles text-xl">
                  {{ appConfig.contact.address.city }},{{
                    appConfig.contact.address.state
                  }}
                </div>
              </a>
            </div>
          </div>
          <!-- <div>
                                                <h6 class="mt-6">HOURS</h6> 
                                            </div> -->
        </div>

        <div
          class="FormWrapper flex flex-col relative shadow-lg lg:mx-0 mt-4 lg:mt-0 bg-white"
        >
          <div
            class="px-4 py-3 text-xl flex justify-center items-center text-textLight bg-backgroundDark"
          >
            <span>QUICK CONTACT</span>
          </div>
          <transition name="fade" mode="out-in">
            <div
              class="lg:px-3"
              key="1"
              v-if="!data.submitted || data.submitting"
            >
              <div class="grid lg:grid-cols-2">
                <div class="m-2">
                  <label
                    class="block text-titles text-md font-bold mb-2 pl-2"
                    for="Name"
                  >
                    Name
                  </label>
                  <input
                    v-bind="data.name"
                    class="shadow appearance-none text-bodyCopy text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div class="m-2">
                  <label
                    class="block text-titles text-md font-bold mb-2 pl-2"
                    for="Email"
                  >
                    Email
                  </label>
                  <input
                    v-bind="data.email"
                    class="shadow appearance-none text-bodyCopy text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div class="m-2">
                  <label
                    class="block text-titles text-md font-bold mb-2 pl-2"
                    for="Phone"
                  >
                    Phone
                  </label>
                  <input
                    v-bind="data.phone"
                    class="shadow appearance-none text-bodyCopy text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Phone"
                  />
                </div>

                <div class="m-2">
                  <label
                    class="block text-titles text-md font-bold mb-2 pl-2"
                    for="Location"
                  >
                    Location
                  </label>
                  <input
                    v-bind="data.location"
                    class="shadow appearance-none text-bodyCopy text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Location"
                  />
                </div>
              </div>
              <div class="px-4 py-4">
                <label for="message" class="hidden"></label>
                <textarea
                  v-model="data.message"
                  class="shadow appearance-none text-bodyCopy text-xl border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  rows="6"
                />
              </div>
              <div
                v-on:click="submit()"
                class="w-56 px-3 m-auto py-3 uppercase font-bold text-xl text-buttonColor bg-buttonBackground flex justify-center items-center hover:cursor-pointer"
              >
                Submit
              </div>
              <small class="text-gray-500"
                >This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                and
                <a href="https://policies.google.com/terms">Terms of Service</a>
                apply.
              </small>
            </div>
            <div
              key="2"
              class="px-5 flex-grow flex justify-center items-center text-2xl py-16"
              v-else
            >
              <div class="text-bodyCopy">
                Thanks for contacting us. Someone will get with you as soon as
                possible.
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <iframe
      width="100%"
      height="450"
      frameborder="0"
      style="border: 0"
      title="Google Maps"
      :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyD10RbBi3cpHMtYcKvoosh3PDIqygnAzWI&q=${appConfig.contact.address.street},${appConfig.contact.address.city},${appConfig.contact.address.state}&attribution_source=Google+Maps+Embed+API`"
    >
    </iframe>
  </section>
</template>
<script setup lang="ts">
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

useSeoMeta({
  title: "Contact",
  ogTitle: "Contact",
  description: "Quick Contact Page",
  ogDescription: "Quick Contact Page",
  ogImage: "https://www.buckandjohnnys.com/bucknj.webp",
  ogSiteName: "Buck & Johnnys Restaurant",
});

const { vueApp } = useNuxtApp();
vueApp.use(VueReCaptcha, {
  siteKey: "6LdBiD0aAAAAABbNN4G57tXCDHu-lpIzklEP5ikh",
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
  email: "",
  phone: "",
  message: "",
  location: "",
});

async function submit() {
  let componentToken = await recaptcha?.executeRecaptcha("login");
  let postObject = {
    formName: "Quick Contact",
    name: data.name,
    reCaptchaKey: componentToken,
    emailsOverride: ["rhondabbranch@gmail.com"],
    dictionary: {
      Name: data.name,
      Email: data.email,
      Message: data.message,
      Phone: data.phone,
      Location: data.location,
    },
    licenseKey: appConfig.licenseKey,
  };

  const response = await useFetch(
    `https://splashdownadminportal.azurewebsites.net/contactform`,
    {
      method: "POST",
      body: postObject,
      headers: {
        "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Expose-Headers": "*",
      },
    }
  );

  data.submitted = true;
}

onMounted(async () => {
  recaptcha = useReCaptcha();
  await recaptcha?.recaptchaLoaded();
});
</script>
