<template>
    <div class="w-full px-5 pt-20 md:px-20 min-h-dvh">
        <div class="flex flex-col w-full space-y-3">
            <div class="mb-10 text self-center">
                <Transition name="fade" mode="out-in">
                    <h1 class="text-4xl text-center lg:text-5xl" v-if="result">Home for sale in {{ property[0]?.name }}
                    </h1>
                    <div class="bg-gray-50 h-20 w-[385px] md:w-[514px] md:h-12 lg:w-[864px]" v-else></div>
                </Transition>
            </div>

            <div
                class="grid w-full grid-cols-3 grid-rows-3 gap-2 overflow-hidden  rounded-xl h-[316px] md:h-[350px] lg:h-[430px] xl:h-[518px]  md:max-h-[350px] lg:maxh-[430px] xl:max-h-[518px]">
                <div class="w-full h-full row-span-3 bg-gray-50 [&:not(:first-child)]:col-span-1 [&:not(:first-child)]:row-span-1"
                    :class="images[0].length > 1 ? ' first:col-span-2' : ' first:col-span-3'" v-for="item in images[0]"
                    v-if="result">
                    <img :src="item.source" class="w-full h-full"
                        :class="images[0].length > 1 ? 'object-cover object-center' : ' lg:object-fill'"
                        :alt="item.label">
                </div>
                <div class="w-full h-full col-span-2 bg-gray-50 row-span-3 [&:not(:first-child)]:col-span-1 [&:not(:first-child)]:row-span-1"
                    v-for="item in imgtotal" v-else>
                    <div class=" min-h-96"></div>
                </div>
            </div>
            <div class="basis-full">
                <Transition name="fade" mode="out-in">
                    <h3 class="text-2xl font-semibold" v-if="result">
                        {{ toIDR(property[0]?.price) }}
                    </h3>
                    <div class="bg-gray-50 h-8 w-[385px] md:w-[514px] lg:w-[864px]" v-else></div>
                </Transition>
            </div>

            <Transition name="fade" mode="out-in">
                <div class="flex flex-row justify-between" v-if="result">
                    <Property-detail-item :icon="bedDouble" :label="property[0]?.bed" />
                    <Property-detail-item :icon="bathTub" :label="property[0]?.bath" />
                    <Property-detail-item :icon="tapeMeasure" :label="`${property[0]?.interior} m2`"
                        desc="interior area" />
                    <Property-detail-item :icon="tapeMeasure" :label="`${property[0]?.lot} m2`" desc="lot area" />
                </div>
                <div class="flex flex-row justify-between space-x-4" v-else>
                    <div v-for="item in imgtotal" :key="item.id" class=" bg-gray-50 h-12 grow">
                    </div>
                </div>

            </Transition>

            <Transition name="fade" mode="out-in">
                <div v-if="result">
                    <div class="space-y-4" v-for="item in details[0]">
                        <h3 class="text-2xl font-semibold capitalize">
                            {{ item.title }}
                        </h3>
                        <p>
                            {{ item.description }}
                        </p>
                    </div>
                </div>
                <div v-else>
                    <div class=" bg-gray-50 h-96 lg:h-72"></div>
                </div>

            </Transition>
            <Transition name="fade" mode="out-in">
                <button-component type="button" label="Request tour" themed="primary" v-if="result" />
                <div class="py-4 text-lg rounded-full min-w-48 max-w-64 bg-gray-50" v-else></div>
            </Transition>

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
import { computed, onMounted } from 'vue';
import { toIDR } from '@/helpers/curency';
import { useHead } from '@unhead/vue';

let title = ''

onMounted(() => {
    window.scrollTo(0, 0)
})


const route = useRoute()
const { result, error } = useFetch(`properties/${route.params.id}`)
const imgtotal = 4

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

useHead({
    title: `Property for sale`
})



</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>