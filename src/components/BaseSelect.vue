<template>
    <select id="" v-model="selected" name="region" @change="selectOption">
        <option v-for="(item, index) in options" :key="index" :value="item[value]">{{ item[text] }}</option>

    </select>
</template>

<script setup>
const selected = defineModel()
defineProps({
    // eslint-disable-next-line vue/require-prop-types
    value: {
        required: true
    },
    text: {
        type: String,
        required: true
    },
    // eslint-disable-next-line vue/require-prop-types
    options: {
        required: true
    },


})

</script>

<style lang="scss" scoped></style>