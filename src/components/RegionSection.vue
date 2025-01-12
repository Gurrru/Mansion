<template>
    <section class="flex flex-col items-center w-full px-5 gap-y-4 md:px-20 ">
        <h3 class="text-[28px] sm:text-center">
            Browse by region
        </h3>
        <p class="text-lg sm:text-center">
            Search property listings by region in Yogyakarta
        </p>
        <div class="grid w-full grid-cols-2 gap-5 md:grid-cols-5 md:mt-4">
            <CardRegion
                gambar="https://images.unsplash.com/photo-1649940640500-13e7f2c065ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                label="Yogyakarta" />
            <CardRegion
                gambar="https://images.unsplash.com/photo-1572533868989-19457c150d68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                label="Sleman" />
            <CardRegion :gambar="gambar" label="Bantul" />
            <CardRegion
                gambar="https://images.unsplash.com/photo-1667298132755-b63d296d28ab?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                label="Kulon Progo" />
            <CardRegion
                gambar="https://images.unsplash.com/photo-1633340843537-aa187c4dd70b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                label="Gunung Kidul" />
        </div>

    </section>
</template>

<script setup>
import CardRegion from './CardRegion.vue';
import gambar from '@/assets/images/Bantul.jpg'

</script>

<style lang="scss" scoped></style>