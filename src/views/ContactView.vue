<template>
    <div class="flex flex-col sm:gap-x-10 bg-[#F5F1ED] px-5 py-20 space-y-5 min-h-dvh md:px-20 sm:justify-center">
        <h1 class="hidden text-5xl text-center capitalize lg:text-5xl sm:block sm:basis-full sm:w-full lg:mb-10">
            get in touch
        </h1>
        <div class="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:justify-center sm:gap-x-5">
            <div
                class="flex flex-col items-center space-y-5 text-center md:space-y-0 md:text-start md:items-start basis-1/2 md:basis-96">
                <h1 class="text-4xl text-center capitalize lg:text-5xl sm:hidden">
                    get in touch
                </h1>
                <div class="overflow-hidden rounded-tr-[100px] md:max-w-96">
                    <img :src="imgperson" class="" alt="" srcset="">
                </div>
                <p class="text-xs text-center md:text-start md:!mt-3 lg:text-sm">
                    Have a question or need assistance? We're here to help! Whether you're looking for your dream
                    property or just want to chat, feel free to reach out.
                </p>
                <div class=" w-1/2 md:w-full  md:ml-4 md:!mt-3">
                    <h2 class="text-2xl capitalize md:text-xs lg:text-sm ">
                        phone
                    </h2>
                    <p class="text-sm md:text-xl">
                        +639318598521
                    </p>
                </div>

                <div class=" w-1/2 md:w-full md:ml-4 info md:!mt-3">
                    <h3 class="text-2xl md:text-xs lg:text-sm ">
                        email
                    </h3>
                    <p class="text-sm md:text-xl">
                        mansion@gmail.com
                    </p>
                </div>
                <div class=" w-1/2 md:w-full md:ml-4 info md:!mt-3 ">
                    <h4 class="text-2xl md:text-xs lg:text-sm ">Mah Dol</h4>
                    <p class="w-full text-sm md:text-xl">
                        Old Cabalan
                        Olongapo City,
                        Philippines
                    </p>
                </div>

            </div>

            <form ref="form"
                class="flex flex-col w-full px-6 py-10 bg-white gap-y-5 rounded-2xl sm:basis-72 sm:max-h-min lg:basis-1/2"
                @submit.prevent="onSubmit">
                <base-input v-model="contactForm.fname" type="text" label="Full name" />
                <base-input v-model="contactForm.email" type="email" label="Email" />
                <base-input v-model="contactForm.phone" type="tel" label="Phone" />
                <base-input v-model="contactForm.subject" type="text" label="Subject" />
                <base-textarea v-model="contactForm.message" label="Message" />
                <ButtonComponent type="submit" class="self-center " label="send message" themed="primary" />
            </form>
        </div>
    </div>
</template>

<script setup>

import ButtonComponent from '@/components/ButtonComponent.vue';
import BaseInput from '@/components/BaseInput.vue';
import { reactive, onMounted } from 'vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import imgperson from "../assets/images/person.jpg"
import { useHead } from '@unhead/vue';
useHead({
    title: `Contact`
})
onMounted(() => {
    window.scrollTo(0, 0)
})




const contactForm = reactive(
    {
        fname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }
)



function onSubmit() {


}
</script>
