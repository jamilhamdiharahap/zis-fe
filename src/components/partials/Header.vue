<script setup>
import { computed, onMounted } from 'vue';

const getName = computed(() => localStorage.getItem("name"))

</script>

<template>
    <div class="fixed w-full flex items-center justify-between h-14 z-10 bg-[#1da2b2]">
        <router-link to="/zis">
            <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 border-none">
                <img src="../../assets/2685867_9189-removebg.png" alt="icon" class="h-20 w-20">
            </div>
        </router-link>
        <div class="flex justify-between items-center h-14 w-full md:px-8 px-4">
            <slot />
            <button class="px-4 py-2 rounded-full bg-white space-x-1 shadow-sm border-none">
                <span class="relative">
                    🐻🙊
                </span>
                <span class="text-xs text-[#252525] font-bold leading-4">{{ getName.toUpperCase() }}</span>
            </button>
            <!-- <ul class="flex items-center ml-auto">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7A9D54" height="40" viewBox="0 -960 960 960" width="40">
                        <path
                            d="M480-492.719q-57.749 0-96.438-38.689-38.689-38.688-38.689-96.566 0-57.877 38.689-96.438 38.689-38.56 96.438-38.56t96.438 38.56q38.689 38.561 38.689 96.438 0 57.878-38.689 96.566-38.689 38.689-96.438 38.689Zm248.974 305.025H231.026q-21.089 0-36.057-14.968-14.968-14.967-14.968-36.057v-29.23q0-31.282 16.705-55.576 16.705-24.295 43.808-37.346 61.871-28.41 121.056-42.744 59.184-14.333 118.422-14.333t118.225 14.539q58.987 14.538 120.692 42.72 27.813 13.028 44.451 37.243 16.639 24.215 16.639 55.497v29.23q0 21.09-14.968 36.057-14.968 14.968-36.057 14.968Zm-498.718-50.255h499.488v-30q0-14.462-8.936-27.449-8.936-12.987-23.578-20.603-56.564-27.615-109.34-39.653-52.777-12.039-107.89-12.039t-108.428 12.039q-53.315 12.038-109.213 39.653-14.641 7.616-23.372 20.603-8.731 12.987-8.731 27.449v30ZM480-542.974q35.974 0 60.423-24.448 24.449-24.449 24.449-60.424 0-35.974-24.449-60.423-24.449-24.448-60.423-24.448-35.974 0-60.423 24.448-24.449 24.449-24.449 60.423 0 35.975 24.449 60.424 24.449 24.448 60.423 24.448Zm0-84.872Zm0 389.897Z" />
                    </svg>
                </li>
                <li>
                    <div class="block w-px h-6 mx-3 bg-gray-400"></div>
                </li>
                <li>
                    <a href="#" class="flex items-center mr-4 text-[#252252]">
                        <span class="inline-flex mr-1">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </span>
                        Logout
                    </a>
                </li>
            </ul> -->
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.bg-base {
    background: hsla(128, 42%, 31%, 1);

    background: linear-gradient(90deg, hsla(128, 42%, 31%, 1) 0%, hsla(99, 45%, 45%, 1) 100%);

    background: -moz-linear-gradient(90deg, hsla(128, 42%, 31%, 1) 0%, hsla(99, 45%, 45%, 1) 100%);

    background: -webkit-linear-gradient(90deg, hsla(128, 42%, 31%, 1) 0%, hsla(99, 45%, 45%, 1) 100%);
}
</style>