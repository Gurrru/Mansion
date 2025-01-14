<template>
    <div class="space-y-2 input__group">
        <label for="" class="block capitalize ">
            {{ label }}
        </label>

        <textarea id="" v-model="model" name=""
            class="w-full px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-textarea"></textarea>
    </div>
</template>

<script setup>
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