<template>
    <div class="px-5 md:px-20 grid grid-flow-row gap-y-6 md:gap-x-16  md:grid-cols-4 md:!mt-20 py-20 ">
        <div class="self-center mx-auto md:self-start">
            <RouterLink to="/">
                <img src="../assets/images/logo mansion.png" class=" max-w-40 md:w-full" alt="" srcset="">
            </RouterLink>

        </div>

        <FooterItem label="Location">
            Old Cabalan <br>
            Olongapo City, <br>
            Philippines<br>
            +639318598521
        </FooterItem>
        <FooterItem label="navigation">
            <ul>
                <li v-for="item in Links" :key="item.id">
                    <RouterLink :to="item.to">{{ item.name }}</RouterLink>
                </li>

            </ul>

        </FooterItem>
        <FooterItem label="Social Media">
            <ul>
                <li>
                    <RouterLink to="/">Facebook</RouterLink>

                </li>
                <li>
                    <RouterLink to="/">Instagram</RouterLink>

                </li>
                <li>
                    <RouterLink to="/">Linkedin</RouterLink>

                </li>
            </ul>
        </FooterItem>





    </div>
</template>

<script setup>
import FooterItem from './FooterItem.vue';
import { Links } from '@/additional/additional';
</script>
