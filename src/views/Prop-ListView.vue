<template>
    <div class="pt-20 min-h-dvh">
        <div class="px-5 md:px-20">
            <div class="flex flex-col sm:flex-row sm:flex-wrap gap-y-5 sm:gap-5 sm:justify-between">
                <h1 class="text-5xl text-center capitalize sm:basis-full">iconic for good reason</h1>
                <div class="flex flex-row justify-between sm:basis-full">
                    <base-select v-model="selected" :options="listSelected" value="id" text="name" />
                    <base-select v-model="sorted" :options="listSorted" value="value" text="text" />
                </div>

                <div v-if="resultProperties"
                    class="grid grid-flow-row basis-full sm:grid-cols-2 gap-7 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9">
                    <CardProperty v-for="item in propertySorted" :id="item.id" :key="item.id" :km="item.property.bath"
                        :kt="item.property.bed" :harga="item.property.price" :name="item.property.name"
                        :gambar="item.images[0].source" :param="item.property.id" />
                </div>

                <div v-if="!resultProperties" class="">
                    loading
                </div>
                <div v-if="resultProperties?.length === 0" class="">
                    kosong
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import CardProperty from '@/components/CardProperty.vue';
import useFetch from '@/composables/fetch';
import BaseSelect from '@/components/BaseSelect.vue';
import { computed, ref, watch, watchEffect, } from 'vue';

const selected = ref(`regions`)
const sorted = ref('low')

const listSorted = [
    {
        text: "low prices",
        value: "low"
    },
    {
        text: "max prices",
        value: "max"
    },
]

const urlLink = computed(() => {
    let baseUrl = "regions"
    if (selected.value === "regions") {
        return baseUrl = 'properties'
    }
    return baseUrl + `/${selected.value}`
})
const { result: resultProperties, error: errorProperties } = useFetch(urlLink)
const { result: resultRegion, error: errorRegion } = useFetch('regions')




const listSelected = computed(() => {
    let data = [
        {
            id: "regions",
            name: "Select all",
        }
    ]
    if (resultRegion) {
        resultRegion.value?.forEach(item => {
            data.push(item)
        });
    }
    return data;
})



const propertySorted = computed(() => {
    let data = resultProperties.value ? Object.values(resultProperties.value) : []
    if (sorted.value === "low") {
        return data.sort((a, b) => a.property.price - b.property.price)

    } else {
        return data.sort((a, b) => b.property.price - a.property.price)
    }

})

</script>

<style></style>