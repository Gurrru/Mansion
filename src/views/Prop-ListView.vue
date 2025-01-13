<template>
    <div class="pt-20 min-h-dvh">
        <div class="px-5 md:px-20">
            <div class="flex flex-col sm:flex-row sm:flex-wrap gap-y-5 sm:gap-5 sm:justify-between">
                <h1 class="text-5xl text-center capitalize sm:basis-full">iconic for good reason</h1>
                <div class="flex flex-row justify-between sm:basis-full">
                    <select id="" name="region">
                        <option value="" selected disabled>Select Region</option>
                        <option value="">All</option>
                        <option value="">Yogyakarta</option>
                        <option value="">Sleman</option>
                        <option value="">Bantul</option>
                        <option value="">Kulon Progo</option>
                        <option value="">Gunung Kidul</option>
                    </select>
                    <select id="" name="price">
                        <option value="" selected>Recently Listed</option>
                        <option value="">Price High</option>
                        <option value="">Price Low</option>

                    </select>
                </div>

                <div class="grid grid-flow-row basis-full sm:grid-cols-2 gap-7 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9">
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                    <CardProperty />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import CardProperty from '@/components/CardProperty.vue';
</script>

<style></style>