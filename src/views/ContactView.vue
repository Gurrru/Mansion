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
                    <img src="../assets/images/person.jpg" class="" alt="" srcset="">
                </div>
                <p class="text-xs text-center md:text-start md:!mt-3 lg:text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit soluta, doloribus incidunt
                    praesentium
                    porro
                    ab maxime repellendus? A corrupti, quaerat iusto optio ea obcaecati labore distinctio animi aperiam,
                    sint
                    repellat!
                </p>
                <div class=" w-1/2 md:w-full  md:ml-4 md:!mt-3">
                    <h2 class="text-2xl capitalize md:text-xs lg:text-sm ">
                        phone
                    </h2>
                    <p class="text-sm md:text-xl">
                        +62 89656448972
                    </p>
                </div>

                <div class=" w-1/2 md:w-full md:ml-4 info md:!mt-3">
                    <h3 class="text-2xl md:text-xs lg:text-sm ">
                        email
                    </h3>
                    <p class="text-sm md:text-xl">
                        hi@mahdol.com
                    </p>
                </div>
                <div class=" w-1/2 md:w-full md:ml-4 info md:!mt-3 ">
                    <h4 class="text-2xl md:text-xs lg:text-sm ">Mah Dol</h4>
                    <p class="w-full text-sm md:text-xl">
                        ΕΟ Κυπαρισσίας Πύλου
                        Kiparissia 245 00
                        Greece
                    </p>
                </div>

            </div>

            <form
                class="flex flex-col w-full px-6 py-10 bg-white gap-y-5 rounded-2xl sm:basis-72 sm:max-h-min lg:basis-1/2">
                <div class="space-y-2 input__group">
                    <label for="" class="block capitalize ">
                        Full name
                    </label>
                    <input id="" type="text" name=""
                        class="w-full h-12 px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-input">
                </div>
                <div class="space-y-2 input__group">
                    <label for="" class="block capitalize ">
                        email address
                    </label>
                    <input id="" type="email" name=""
                        class="w-full h-12 px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-input">
                </div>
                <div class="space-y-2 input__group">
                    <label for="" class="block capitalize ">
                        phone
                    </label>
                    <input id="" type="tel" name=""
                        class="w-full h-12 px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-input">
                </div>
                <div class="space-y-2 input__group">
                    <label for="" class="block capitalize ">
                        subject
                    </label>
                    <input id="" type="text" name=""
                        class="w-full h-12 px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-input">
                </div>
                <div class="space-y-2 input__group">
                    <label for="" class="block capitalize ">
                        Message
                    </label>

                    <textarea id="" name=""
                        class="w-full px-3 py-2 rounded-lg bg-zinc-100 focus:border-0 focus:ring-0 form-textarea"></textarea>
                </div>
                <ButtonComponent class="self-center " label="send message" themed="primary" />
            </form>
        </div>

    </div>
</template>

<script setup>

import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<style></style>