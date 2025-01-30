<template>
    <section class="flex flex-col items-center w-full px-5 gap-y-4 md:px-20 ">
        <h3 class="text-[28px] sm:text-center">
            Browse by region
        </h3>
        <p class="text-lg sm:text-center">
            Search property listings by region in Yogyakarta
        </p>
        <div class="grid w-full grid-cols-2 gap-5 md:grid-cols-5 md:mt-4">
            <CardRegion v-for="data in result" :key="data.id" :gambar="data.source" :label="data.name"
                :region-id="data.id" />
        </div>

    </section>
</template>

<script setup>
import CardRegion from './CardRegion.vue';
import useFetch from '@/composables/fetch';

const { result } = useFetch('regions')

</script>

<style lang="scss" scoped></style>