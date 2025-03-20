<template>
    <section class="flex flex-col items-center w-full px-5 gap-y-4 md:px-20 ">
        <h3 class="text-[28px] sm:text-center">
            Browse by region
        </h3>
        <p class="text-lg sm:text-center">
            Search property listings by region in Olongapo
        </p>
        <div class="grid w-full grid-cols-2 gap-5 md:grid-cols-5 md:mt-4">

            <div v-if="loading" class="dd">loading dulu say</div>
            <CardRegion v-for="data in result" v-else :key="data.id" :gambar="data.source" :label="data.name"
                :region-id="data.id" />

            <div v-if="error" class="">{{ error }}</div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';
import CardRegion from './CardRegion.vue';
import useFetch from '@/composables/fetch';
const url = ref('regions')
const { result, loading, error } = useFetch(url)

</script>

<style lang="scss" scoped></style>
