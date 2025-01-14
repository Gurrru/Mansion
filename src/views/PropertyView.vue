<template>
    <div class="w-full px-5 pt-20 md:px-20 min-h-dvh">
        <div class="flex flex-col w-full space-y-3">
            <div class="mb-10 text">
                <h1 class="text-4xl text-center lg:text-5xl">Home for sale in Sleman</h1>
            </div>

            <div
                class="grid w-full grid-cols-3 grid-rows-3 gap-2 overflow-hidden  rounded-xl md:max-h-[350px] lg:maxh-[430px] xl:max-h-[518px]">
                <div class="w-full h-full col-span-2 row-span-3 ">
                    <img src="https://placehold.co/400" class="object-cover object-center w-full h-full" alt="">
                </div>
                <div class="w-full h-full col-span-1 row-span-1">
                    <img src="https://placehold.co/400" alt="" class="object-cover w-full h-full" srcset="">
                </div>
                <div class="w-full h-full col-span-1 row-span-1">
                    <img src="https://placehold.co/400" alt="" class="object-cover w-full h-full" srcset="">
                </div>
                <div class="w-full h-full col-span-1 row-span-1">
                    <img src="https://placehold.co/400" alt="" class="object-cover w-full h-full" srcset="">
                </div>
            </div>
            <div class="basis-full">
                <h2 class="text-2xl font-semibold">
                    Rp.600.000.000
                </h2>
            </div>
            <div class="flex flex-row justify-between">
                <Property-detail-item :icon="bedDouble" label="4" />
                <Property-detail-item :icon="bathTub" label="4" />
                <Property-detail-item :icon="tapeMeasure" label="188 m2" desc="interior area" />
                <Property-detail-item :icon="tapeMeasure" label="300 m2" desc="lot area" />
            </div>

            <div class="space-y-4 description">
                <h3 class="text-2xl font-semibold capitalize">
                    description
                </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente amet tenetur facilis praesentium,
                    repellendus totam vero iste tempore maiores nihil! Praesentium itaque ipsum ducimus aspernatur
                    molestias, quibusdam in maxime impedit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus mollitia minus ratione
                    aspernatur omnis laboriosam illo fugiat quia, impedit ea, consequatur, reiciendis iste quae eligendi
                    id reprehenderit cum! Quod.
                </p>
            </div>
            <div class="space-y-4 area">
                <h3 class="text-2xl font-semibold capitalize">
                    area
                </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente amet tenetur facilis praesentium,
                    repellendus totam vero iste tempore maiores nihil! Praesentium itaque ipsum ducimus aspernatur
                    molestias, quibusdam in maxime impedit

                </p>
            </div>
            <button-component type="button" label="Request tour" themed="primary" />

        </div>
    </div>
</template>

<script setup>
import PropertyDetailItem from '@/components/PropertyDetailItem.vue';
import bedDouble from '~icons/hugeicons/bed-double'
import bathTub from '~icons/hugeicons/bathtub-02'
import tapeMeasure from '~icons/hugeicons/tape-measure'
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<style lang="scss" scoped></style>