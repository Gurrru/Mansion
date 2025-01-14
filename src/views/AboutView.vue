<template>
  <div class="w-full pt-20 min-h-dvh">

    <div class="flex flex-col justify-center ">
      <div class="space-y-3 text-center bg-[#F5F1ED] basis-56 px-5 md:px-20 py-3">
        <h1 class="text-4xl lg:text-5xl">Welcome to Mah Dol
        </h1>
        <p class="text-center lg:text-lg lg:text-center">At Mah Dol, we believe that finding a home or property should
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
            platform for property listings. Whether you're looking to buy, sell, or rent, Mah Dol is here to help you
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
          <div class="flex flex-col md:flex-row gap-y-5 md:justify-between md:flex-wrap ">
            <AboutItem :icon="IconAccountSetting" title="User-Centric Experience"
              text="Our platform is designed with you in mind, offering intuitive navigation and personalized recommendations." />
            <AboutItem :icon="IconAccountSetting" title="User-Centric Experience"
              text="Our platform is designed with you in mind, offering intuitive navigation and personalized recommendations." />
            <AboutItem :icon="IconAccountSetting" title="User-Centric Experience"
              text="Our platform is designed with you in mind, offering intuitive navigation and personalized recommendations." />
            <AboutItem :icon="IconAccountSetting" title="User-Centric Experience"
              text="Our platform is designed with you in mind, offering intuitive navigation and personalized recommendations." />

          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>
import AboutItem from '@/components/AboutItem.vue';
import IconAccountSetting from '~icons/hugeicons/account-setting-02'
</script>
