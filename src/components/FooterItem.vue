<template>
    <div class="">
        <div class="w-full pb-1 mb-2 text-base font-semibold capitalize border-b">
            {{ label }}
        </div>
        <div class=" max-w-56">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})

</script>
