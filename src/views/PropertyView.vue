<template>
    <div class="w-full px-5 pt-20 md:px-20 min-h-dvh">
        <div class="flex flex-col w-full space-y-3">
            <div class="mb-10 text">
                <h1 class="text-4xl text-center lg:text-5xl">Home for sale in {{ property[0]?.name }}</h1>
            </div>

            <div
                class="grid w-full grid-cols-3 grid-rows-3 gap-2 overflow-hidden  rounded-xl md:max-h-[350px] lg:maxh-[430px] xl:max-h-[518px]">

                <div class="w-full h-full col-span-2 row-span-3 [&:not(:first-child)]:col-span-1 [&:not(:first-child)]:row-span-1"
                    v-for="item in images[0]">
                    <img :src="item.source" class="object-cover object-center w-full h-full" :alt="item.label">
                </div>
            </div>
            <div class="basis-full">
                <h2 class="text-2xl font-semibold">
                    Rp.{{ property[0]?.price }}
                </h2>
            </div>
            <div class="flex flex-row justify-between">
                <Property-detail-item :icon="bedDouble" :label="property[0].bed" />
                <Property-detail-item :icon="bathTub" :label="property[0].bath" />
                <Property-detail-item :icon="tapeMeasure" :label="`${property[0].interior} m2`" desc="interior area" />
                <Property-detail-item :icon="tapeMeasure" :label="`${property[0].lot} m2`" desc="lot area" />
            </div>

            <div class="space-y-4 description" v-for="item in details[0]">
                <h3 class="text-2xl font-semibold capitalize">
                    {{ item.title }}
                </h3>
                <p>
                    {{ item.description }}
                </p>
            </div>
            <button-component type="button" label="Request tour" themed="primary" />

        </div>
    </div>
</template>

<script setup>
import PropertyDetailItem from '@/components/PropertyDetailItem.vue';
import bedDouble from '~icons/hugeicons/bed-double'
import bathTub from '~icons/hugeicons/bathtub-02'
import tapeMeasure from '~icons/hugeicons/tape-measure'
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useRoute } from 'vue-router';
import useFetch from '@/composables/fetch';
import { computed, } from 'vue';

const route = useRoute()
const { result, error } = useFetch(`properties/${route.params.id}`)


const data = computed(() => result.value ? Object.values(result.value) : [])
const property = computed(() => {
    let list = []
    data.value.forEach((item) => list.push(item.property))
    return list
})

const images = computed(() => {
    let list = []
    data.value.forEach((item) => list.push(item.images))
    return list
})

const details = computed(() => {
    let list = []
    data.value.forEach((item) => list.push(item.details))
    return list
})
</script>

<style lang="scss" scoped></style>