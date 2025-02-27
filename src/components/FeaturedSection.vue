<template>
    <section class="flex flex-col items-center w-full px-5 gap-y-4 md:px-20 ">
        <h2 class="text-[28px] text-center">
            Featured properties in Yogyakarta
        </h2>
        <p class="text-lg text-center">
            Handpicked Listings Just for You
            Explore the best properties in Yogyakarta, carefully selected to match your lifestyle and investment goals.
        </p>


        <Transition name="fade" mode="out-in">
            <div class="grid grid-flow-row gap-y-5 md:grid-cols-2 xl:grid-cols-4 md:gap-x-5" v-if="result">
                <CardProperty v-for="item in data" :id="item.id" :key="item.id" :km="item.property.bath"
                    :kt="item.property.bed" :harga="item.property.price" :name="item.property.name"
                    :gambar="item.images[0].source" :param="item.property.id" />
            </div>

            <div v-else class="grid grid-flow-row gap-y-5 md:grid-cols-2 xl:grid-cols-4 md:gap-x-5">
                <div v-for="item in 4"
                    class=" w-[341px] h-[435px] sm:min-w-[270px] xl:w-full border rounded-xl bg-gray-50">
                </div>
            </div>
        </Transition>


        <ButtonComponent label="View All" themed="outline" @click="router.push({
            name: 'properties'
        })" />
    </section>
</template>

<script setup>
import CardProperty from './CardProperty.vue';
import ButtonComponent from './ButtonComponent.vue';
import useFetch from '@/composables/fetch';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import router from '@/router';

const rputer = useRouter()
const url = ref('properties')
const { result, error } = useFetch(url)


const data = computed(() => result.value ? Object.values(result.value).slice(0, 4) : [])












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