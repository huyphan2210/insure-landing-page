<script setup lang="ts">
const props = defineProps({
    imgURL: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
})
</script>

<template>
    <div class="reason-card">
        <img :src="imgURL" :alt="title" loading="lazy">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<style scoped>
.reason-card h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-family: 'DM Serif Display', sans-serif;
    color: var(--dark-violet);
    letter-spacing: 0.1rem;
}

.reason-card p {
    color: var(--dark-grayish-violet);
    line-height: 1.5rem;
}
</style>
