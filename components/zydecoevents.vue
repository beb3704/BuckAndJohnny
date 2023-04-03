<template>
    <ClientOnly>
        <div class="grid md:grid-cols-2 max-w-5xl m-auto gap-4 pb-10 pt-6 p-2 cursor-pointer">
            <div class="border-8 border-[#E5E6E7] grid grid-cols-[min-content,1fr]" v-for="event in events"
                v-on:click="openCalendar(event)">
                <div class="bg-lightRed px-4 py-2 text-center text-[#fff] uppercase w-24">
                    <div class="text-sm">{{ event.month }}</div>
                    <div class="text-4xl">{{ event.day }}</div>
                </div>
                <div class="text-center flex justify-center items-center uppercase py-2">
                    {{ event.name }}
                </div>

            </div>

        </div>
    </ClientOnly>
</template>

<script setup >
useHead({
    script: [{ src: 'https://cdn.jsdelivr.net/npm/add-to-calendar-button@2' }],
});

function openCalendar(event) {
    const config = {
        name: event.name,
        description: event.name,
        startDate: event.date,
        location: "Buck & Johnny's: Eclectic Italian with a Cajun Flair, 100 Berard St, Breaux Bridge, LA 70517, USA",
        options: ['Apple', 'Google', 'iCal', 'Outlook.com', 'Yahoo', 'Microsoft365', 'MicrosoftTeams'],
    };
    atcb_action(config);
}

const { data: events } = await useFetch(`https://rrapibeta.azurewebsites.net/api/public/BuckAndJohnny/GetZydecoBreakfast`)

</script>