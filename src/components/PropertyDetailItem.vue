<template>
    <div class="flex items-center">
        <component :is="icon" class="mr-2 text-2xl"></component>
        <div class="flex flex-col">
            <span class="text-xl ">{{ label }}</span>
            <span v-if="desc" class="text-sm capitalize">{{ desc }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: Object,
        required: true
    },
    label: {
        required: true
    },
    desc: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>