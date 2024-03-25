<script setup>
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores';

const router = useRouter();
const store = useAuthStore();

const getLoading = computed(() => store.getLoading);
const getMessage = computed(() => store.getMessage);
const getAlert = computed(() => store.getAlert);

const form = reactive({
    username: "",
    password: ""
});

const login = async () => {
    await store.login({ router: router, payload: form });
    form.username = "";
    form.password = "";
}
</script>

<template>
    <div class="flex flex-wrap min-h-full sm:h-screen justify-center px-6 py-12 lg:px-8 bg-[#1da2b2] bg-opacity-70">
        <div id="snackbar" :class="getAlert ? 'show' : 'hidden'" class="absolute bg-white right-4 min-w-[48px] rounded-sm">
            <div class="flex py-1.5 items-center px-2 space-x-2">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#FE0000" viewBox="0 -960 960 960" width="24">
                        <path
                            d="M479.988-301.538q10.012 0 16.268-6.245 6.257-6.245 6.257-16.256 0-10.012-6.245-16.269-6.245-6.256-16.256-6.256-10.012 0-16.268 6.245-6.257 6.244-6.257 16.256t6.245 16.268q6.245 6.257 16.256 6.257Zm-15.937-130.206h33.846v-244.051h-33.846v244.051ZM480.311-120q-75.008 0-140.332-28.339-65.325-28.34-114.286-77.255-48.961-48.915-77.327-114.228Q120-405.135 120-480.2q0-74.551 28.339-140.182 28.34-65.631 77.255-114.259 48.915-48.627 114.228-76.993Q405.135-840 480.2-840q74.551 0 140.182 28.339 65.631 28.34 114.259 76.922 48.627 48.582 76.993 114.257Q840-554.806 840-480.311q0 75.008-28.339 140.332-28.34 65.325-76.922 114.163-48.582 48.838-114.257 77.327Q554.806-120 480.311-120Zm.022-33.846q135.923 0 230.872-95.026 94.949-95.025 94.949-231.461 0-135.923-94.824-230.872-94.824-94.949-231.33-94.949-136.103 0-231.128 94.824-95.026 94.824-95.026 231.33 0 136.103 95.026 231.128 95.025 95.026 231.461 95.026ZM480-480Z" />
                    </svg>
                </span>
                <span class="leading-6 text-xs">{{ getMessage }}</span>
            </div>
            <div class="py-0.5">
                <div class="h-1 bg-red-700 w-full"></div>
            </div>
        </div>
        <div class="max-w-[400px] my-auto">
            <p
                class="leading-6 text-md animate-text bg-gradient-to-r from-title via-purple-500 to-orange-500 bg-clip-text text-transparent">
                وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ ۗ وَمَا تُقَدِّمُوْا لِاَنْفُسِكُمْ مِّنْ خَيْرٍ تَجِدُوْهُ
                عِنْدَ اللّٰهِ ۗ اِنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ</p>
            <p class="leading-6 text-[#252525] text-sm subpixel-antialiased">“Dan laksanakanlah salat dan tunaikanlah zakat. Dan
                segala kebaikan yang kamu kerjakan untuk dirimu, kamu
                akan mendapatkannya (pahala) di sisi Allah. Sungguh, Allah Maha Melihat apa yang kamu kerjakan.” (QS.
                Al-Baqarah: 110)</p>
        </div>
        <div
            class="mt-20 sm:mx-auto sm:w-full md:max-h-[467px] sm:max-w-4xl shadow-lg sm:flex bg-white elevation rounded-md my-auto">
            <div class="sm:max-w-1/2  sm:w-full">
                <img src="../assets/indo_july_45.png" class="object-cover rounded-l-md" alt="ilustration">
            </div>
            <div class="sm:max-w-1/2 sm:w-full sm:flex flex-col justify-evenly">
                <div class="py-6 text-center space-x-2">
                    <p class="leading-6 text-3xl font-bold text-center inline-block align-text-top">
                        Z
                    </p>
                    <p class="leading-6 text-3xl font-bold text-center inline-block align-text-top">
                        I
                    </p>
                    <p class="leading-6 text-3xl font-bold text-center inline-block align-text-top">
                        S
                    </p>
                </div>
                <form @submit.prevent="login" class="space-y-6 px-8">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-title">Email</label>
                        <div class="mt-2">
                            <input id="username" name="username" type="text" autocomplete="username" required
                                v-model="form.username"
                                class="block w-full rounded-md border-0 py-2 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring focus:ring-[#1da2b2] focus:outline-none sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center">
                            <label for="password" class="block text-sm font-medium leading-6 text-title">Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required
                                v-model="form.password"
                                class="block w-full rounded-md border-0 py-2 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring focus:ring-[#1da2b2] focus:outline-none sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <button type="submit" :disabled="getLoading"
                            :class="getLoading ? 'bg-[#82e1ef] text-slate-500' : 'custom-bg text-white'"
                            class="elevation flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm focus-visible:outline focus-visible:outline-none focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                            <div class="absolute" :class="getLoading ? 'loading-spinner' : ''"></div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#snackbar {
    visibility: hidden;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    position: fixed;
    z-index: 1;
    right: 0;
}

.show {
    visibility: visible !important;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {
        right: 0;
        opacity: 0;
    }

    to {
        right: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        right: 0;
        opacity: 0;
    }

    to {
        right: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        right: 30px;
        opacity: 1;
    }

    to {
        right: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        right: 30px;
        opacity: 1;
    }

    to {
        right: 0;
        opacity: 0;
    }
}
</style>
