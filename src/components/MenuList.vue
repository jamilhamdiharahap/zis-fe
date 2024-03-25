<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    menuItems: Array
});

const { menuItems } = toRefs(props);

</script>


<template>
    <li v-for="item in menuItems" class="hover:bg-[#E1F2D0] rounded-r-md text-[#252525]">
        <router-link :to="item.path"
            class="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent pr-6">
            <span class="inline-flex justify-center items-center ml-4">
                <div v-html="item.icon"></div>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">{{ item.name }}</span>
        </router-link>
    </li>
</template>