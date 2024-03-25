<script setup>
import { computed, onMounted } from 'vue';
import MenuList from '../MenuList.vue';
import { useAuthStore } from '../../stores';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuthStore();
const getMenu = computed(() => store.getMenu);

const logout = () => {
    store.logout(router);
}

onMounted(() => {
    store.menu(localStorage.getItem("roleId"));
});

</script>

<template>
    <div
        class="fixed flex flex-col top-14 left-0 bg-[#FFFFFF] opacity-1 w-14 hover:w-64 md:w-64 shadow-xl  h-full transition-all duration-300 border-none z-10 sidebar">
        <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
                <li class="px-5 hidden md:block">
                    <div class="flex flex-row items-center h-8">
                        <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                    </div>
                </li>
                <MenuList :menuItems="getMenu" />
                <li class="relative">
                    <button class="absolute rounded-xl md:left-24 top-96 px-4 py-2" @click="logout">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#BB2525" viewBox="0 -960 960 960" width="24">
                            <path
                                d="M140.001-140.001v-679.998h340.384V-760H200v560h280.385v59.999H140.001Zm509.23-169.232-41.537-43.383 97.384-97.385H363.846v-59.998h341.232l-97.384-97.385 41.537-43.383L819.999-480 649.231-309.233Z" />
                        </svg>
                    </button>
                </li>
            </ul>
            <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2023</p>
        </div>
    </div>
</template>


