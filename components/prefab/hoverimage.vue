<template>
  <div :class="`h-56 md:h-72 lg:h-96  hoverBg overflow-hidden ${styleClasses}`">
    <MediaBackgroundimage
      v-if="url && imgAlt"
      class="BackgroundSettings transition-all duration-1000"
      :alt="imgAlt"
      :url="url"
    >
    </MediaBackgroundimage>

    <div
      :class="`h-full w-full bg-opacity-70 bg-backgroundDark z-10 grid justify-center items-center 
        content-center py-2`"
    >
      <h5 class="uppercase text-4xl text-textLight text-center">
        {{ title }}
      </h5>
      <h6 v-if="subTitle" class="uppercase text-l text-accent text-center mt-1">
        {{ subTitle }}
      </h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { HoverBoxStyles } from "~~/models/hoverboxstyles";

const props = defineProps({
  title: { type: String, required: true },
  subTitle: String,
  url: { type: String, required: true },
  imgAlt: { type: String, required: true },
  style: {
    type: String as PropType<HoverBoxStyles>,
    default: HoverBoxStyles.Default,
  },
});

const styleClasses = computed(() => {
  if (props.style === HoverBoxStyles.Default) {
    return "p-6";
  } else if (props.style === HoverBoxStyles.BottomText) {
    return "grid content-end";
  }
});
</script>

<style>
.hoverBg:hover .BackgroundSettings {
  transform: scale(1.1);
}

.hoverBg {
  cursor: pointer;
}
</style>