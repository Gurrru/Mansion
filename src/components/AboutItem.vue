<template>
    <div class=" md:w-64 lg:w-1/2">
        <div class="grid w-10 h-10 bg-gray-400 rounded-full place-content-center icon">
            <component :is="icon" class="text-2xl "></component>
        </div>
        <div class="mb-1 text-xl font-semibold capitalize title" role="heading">
            {{ title }}
        </div>
        <p>
            {{ text }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true

    },
    text: {
        type: String,
        required: true

    },
})
</script>