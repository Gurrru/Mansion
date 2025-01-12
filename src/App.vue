<template>
  <NavBar />
  <div class=" min-h-dvh">
    <RouterView />
  </div>
  <FooterSection />
</template>

<script setup>
import NavBar from './components/NavbarComponent.vue';
import FooterSection from './components/FooterSection.vue';


</script>
