<template>
    <main
        class="flex flex-col lg:flex-row  py-10 bg-[#F5F1ED]  px-5 pt-20 md:px-20 w-full gap-7 min-w-full min-h-dvh lg:items-center ">
        <div class="flex flex-col items-center lg:basis-2/6 lg:items-start gap-y-6">
            <h1 class="text-4xl text-center lg:text-5xl lg:text-start">
                Yogyakarta homes, apartments, land & more
            </h1>
            <p class="text-center lg:text-lg lg:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident
                inventore,
                voluptate
                repellat,
                tempori</p>
            <ButtonComponent label="Start exploring" themed="primary" />
        </div>

        <!-- min-h-96  lg:min-h-[500px] -->
        <div class="grid grid-cols-2 grid-rows-2 gap-5 mt-5 flex-1 max-h-96 lg:max-h-[35rem]">
            <div class="row-start-1 overflow-hidden rounded-xl">
                <img :src="rumah1" alt="" srcset="" class="object-cover w-full h-full">
            </div>
            <div class="row-start-2 overflow-hidden rounded-xl">
                <img :src="rumah2" alt="" srcset="" class="object-fill object-top w-full h-full ">

            </div>
            <div class="col-start-2 row-span-2 overflow-hidden rounded-xl">
                <img :src="rumah3" alt="" srcset="" class="object-fill w-full h-full ">
            </div>
        </div>
    </main>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue';
import rumah1 from '@/assets/images/rumah1.jpg'
import rumah2 from '@/assets/images/rumah 2.jpg'
import rumah3 from '@/assets/images/rumah 3.jpg'


</script>

<style lang="scss" scoped></style>