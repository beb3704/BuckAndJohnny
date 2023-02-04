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
const state = useStaticAppState();

</script>
