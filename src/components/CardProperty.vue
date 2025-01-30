<!-- eslint-disable vue/require-prop-types -->
<template>
    <div class="w-full h-[435px] sm:min-w-[270px] xl:w-full border rounded-xl overflow-hidden cursor-pointer"
        @click="router.push(`/property/${param}`)">
        <div class="h-[275px]">
            <img class="aspect-[17.25/13.875] w-full h-full  object-cover bg-center " :src="gambar" alt="" srcset="">
        </div>
        <div class="h-full p-5 bg-white">
            <p class="text-lg font-bold capitalize ">{{ name }}</p>
            <div class="flex py-1 text-sm border-t border-b border-gray-200 text-opacity-85 gap-x-3">
                <p>{{ kt }} Kamar tidur</p>
                <span>|</span>
                <p> {{ km }} Kamar mandi</p>
            </div>
            <p class="pb-1 border-b border-gray-200 text-opacity-85 ">
                Rumah
            </p>
            <div class="flex justify-between w-full mt-4 text-opacity-85">
                <p class="text-base ">
                    Rp. <span class="font-semibold ">{{ harga }}</span>
                </p>
                <p class="self-end text-xs ">
                    9 bulan lalu
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()


defineProps({

    kt: {
        required: true
    },
    km: {
        required: true
    },
    name: {
        required: true
    },
    harga: {
        required: true
    },
    gambar: {
        required: true
    },
    param: {
        required: true
    },

})

</script>

<style lang="scss" scoped></style>