<script setup>
import HeroSection from '@/components/HeroSection.vue';
import FeaturedSection from '@/components/FeaturedSection.vue';
import RegionSection from '@/components/RegionSection.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="space-y-10 ">
    <HeroSection />
    <FeaturedSection />
  </div>
</template>
