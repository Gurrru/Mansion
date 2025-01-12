<template>
    <div class="overflow-hidden cursor-pointer group ">
        <div class="flex flex-col lg:w-80">
            <img :src="gambar" class="object-cover object-center aspect-square">
            <div
                class="w-full px-3 py-5 pt-4 text-black transition-all duration-100 ease-in-out group-hover:bg-gray-900 group-hover:text-white ">
                <div class="">
                    <h4 class="mb-4 text-2xl ">
                        {{ label }}</h4>
                    <p class="text-sm ">
                        View More
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({

    gambar: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})


</script>
