<template>
    <div ref="content" :class="classes">
        <div class="triangle left">
            <h1>This is a title</h1>
        </div>
        <div class="triangle right">
            <h1>This is a title</h1>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const content = ref<Element | null>(null)
const classes = ref<string>();
const observer: Ref<IntersectionObserver | null | undefined> = ref(null);
const observerOptions = reactive({ root: content.value, threshold: .3 })

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                classes.value = "open"
            } else {
                classes.value = ""
            }
        })
    }, observerOptions)

    if (content.value) {
        observer.value?.observe(content.value)
    }

})

onUnmounted(() => { observer.value?.disconnect() })
</script>

<style scoped>
.triangle {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #e6e9ec 0%, #d9ecfc 100%);
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.triangle.left {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.triangle.right {
    clip-path: polygon(100% 0, 0 0, 100% 100%);
}

.open .triangle.left {
    clip-path: polygon(0 0, 0 100%, 0 100%);
}

.open .triangle.right {
    clip-path: polygon(100% 0, 100% 0, 100% 100%);
}
</style>