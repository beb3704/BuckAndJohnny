<template>
    <div>
        <div v-for="link in state.NavigationLinks">
            <div class="text-2xl">
                {{ link.Name }}
            </div>
            <div>
                {{ link.Route }}
            </div>
        </div>
    </div>
</template>

<script setup>

useHead({
    title: "A Cool Title"
});

const state = useStaticAppState();

</script>
