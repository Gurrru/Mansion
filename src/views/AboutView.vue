<template>
  <div class="w-full pt-20 min-h-dvh">

    <div class="flex flex-col justify-center ">
      <div class="space-y-3 text-center bg-[#F5F1ED] basis-56 px-5 md:px-20 py-3">
        <h1 class="text-4xl lg:text-5xl">Welcome to Mansion
        </h1>
        <p class="text-center lg:text-lg lg:text-center">At Mansion, we believe that finding a home or property should
          be
          an exciting and hassle-free experience.
          That’s why we’ve created a platform designed to connect buyers, sellers, and renters with ease and
          transparency.</p>
      </div>

      <div class="px-5 md:px-20 md:text-center">
        <div class="py-3 space-y-3">
          <h2 class=" text-[1.75rem] capitalize">
            revolutionize the property market
          </h2>
          <p class="lg:text-lg">
            Our mission is to revolutionize the property market by offering a reliable, user-friendly, and comprehensive
            platform for property listings. Whether you're looking to buy, sell, or rent, Mansion is here to help you
            make
            informed decisions and find the property that truly fits your needs.
          </p>
        </div>
      </div>

      <div class="px-5 md:px-20">
        <div class="py-3 space-y-3">
          <h2 class=" text-[1.75rem] capitalize md:text-center">
            What we offer
          </h2>
          <div class="flex flex-col md:flex-row gap-y-5 md:justify-between md:flex-wrap">
            <AboutItem :icon="IconHome" title="Find Your Dream Home Easily"
              text="Seamless navigation, personalized recommendations, and an effortless way to explore the best properties." />
            <AboutItem :icon="IconsKey01" title="Your Perfect Home, Just a Click Away"
              text="We simplify property searching with intelligent filters and an intuitive browsing experience." />
            <AboutItem :icon="IconLocation" title="Find Homes in the Right Place"
              text="Discover properties in prime locations with a smooth and efficient search experience." />
            <AboutItem :icon="IconsBitcoinGraph" title="Smart Insights for Smart Buyers"
              text="Access market trends and expert recommendations to make the best investment decisions." />

          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>
import AboutItem from '@/components/AboutItem.vue';
import IconsBitcoinGraph from '~icons/hugeicons/bitcoin-graph'
import IconsKey01 from "~icons/hugeicons/key-01"
import IconLocation from "~icons/hugeicons/location-03"
import IconHome from "~icons/hugeicons/house-04"
import { onMounted } from 'vue';
import { useHead } from '@unhead/vue';
useHead({
  title: `About`
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
