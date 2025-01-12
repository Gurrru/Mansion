<template>
    <div class="px-5 md:px-20 grid grid-flow-row gap-y-6 md:gap-x-20  md:grid-cols-4 md:!mt-20 py-20 ">
        <div class="self-start wrapp">
            <RouterLink to="/">
                <img src="../assets/images/logo.png" alt="" srcset="">
            </RouterLink>

        </div>

        <FooterItem label="Location">
            2700 Glades Circle Suite 101
            Weston, Florida 33327 <br>
            +1 954 9990191 <br>
            United States
        </FooterItem>
        <FooterItem label="navigation">
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">About us</RouterLink>

                </li>
                <li>
                    <RouterLink to="/">Properties</RouterLink>

                </li>
                <li>
                    <RouterLink to="/">Contact</RouterLink>

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
</script>
