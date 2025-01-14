<template>
    <div class="space-y-2 input__group">
        <label for="" class="block capitalize ">
            {{ label }}
        </label>
        <input v-model="model"
            class="w-full h-12 px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-input" v-bind="$attrs">
    </div>
</template>

<script setup>

// eslint-disable-next-line vue/require-prop-types
const model = defineModel()
defineOptions({
    inheritAttrs: false
})
defineProps({
    label: {
        type: String,
        required: true
    }
})


</script>

<style lang="scss" scoped></style>