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
import { useHead } from '@unhead/vue';

useHead({
  titleTemplate: '%siteName %separator %s',
  templateParams: { siteName: 'Mah Dol', separator: '|' },
  link: [{
    rel: 'icon',
    "href": "./assets/icons/web-app-manifest-192x192.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "maskable"
  },
  {
    rel: 'icon',
    "href": "./assets/icons/web-app-manifest-512x512.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "maskable"
  }]
})

</script>
