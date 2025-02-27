<template>
    <div
        class="flex flex-col lg:flex-row justify-center  py-10 bg-[#F5F1ED]  px-5 pt-20 md:px-20 w-full gap-7 min-w-full min-h-dvh lg:items-center ">
        <div class="text-center space-y-3">
            <h1 class=" text-center text-6xl font-semibold">404</h1>
            <h2 class="text-3xl">Oops! Page Not Found</h2>
            <p class="text-xl">It looks like this page took a wrong turn. Let’s get you back on track!</p>
            <ButtonComponent themed="primary" label="Back to home" type="button" @click="router.push({
                name: 'home'
            })" />
        </div>
    </div>
</template>

<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<style lang="scss" scoped></style>