<template>
    <div class="relative w-full ">
        <nav class="absolute z-10 flex items-center justify-between w-full px-5 py-5 md:px-20">
            <div class="nav__logo">
                <RouterLink class="transition-all" to="/" @click="closeNavMenu">
                    <img src="../assets/images/logo.png" alt="" srcset="" class=" w-28">
                </RouterLink>

            </div>
            <div class="hidden gap-x-10 sm:flex">
                <RouterLink class="transition-all" to="/about" @click="closeNavMenu">About Us</RouterLink>
                <RouterLink class="transition-all" to="/properties" @click="closeNavMenu">Properties</RouterLink>
                <RouterLink class="transition-all" to="/contact" @click="closeNavMenu">Contact</RouterLink>

            </div>
            <div class="sm:hidden">
                <button type="button" @click="showNavMenu">
                    <HugeiconsMenu01 v-if="!open" />
                    <HugeIconsCancel01 v-else />
                </button>

            </div>
        </nav>
        <div class="absolute top-0 bottom-0 w-full min-h-screen transition-all duration-700 ease-in-out bg-white "
            :class="`${open ? ' opacity-100 scale-100' : ' opacity-0 scale-0'}`">
            <div
                class="flex flex-col items-center w-full h-full py-20 text-5xl transition-all duration-700 ease-in-out ">
                <RouterLink class="transition-all" to="/about" @click="closeNavMenu">About Us</RouterLink>
                <RouterLink class="transition-all" to="/prop-list" @click="closeNavMenu">Properties</RouterLink>
                <RouterLink class="transition-all" to="/contact" @click="closeNavMenu">Contact</RouterLink>

            </div>
        </div>
    </div>



</template>

<script setup>
import { ref, watch } from "vue";
import HugeiconsMenu01 from "~icons/hugeicons/menu-01"
import HugeIconsCancel01 from "~icons/hugeicons/cancel-01"


const open = ref(false);

function showNavMenu() {
    open.value = !open.value;

}

function closeNavMenu() {
    open.value = false;
}

watch(open, (newOpen) => {
    if (newOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }

})


</script>

<style scoped>
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>