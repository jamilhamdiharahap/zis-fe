<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import TableComponent from '../../components/TableComponent.vue';
import { useCategoriStore } from '../../stores/categori';

const store = useCategoriStore();

const formatDate = (value) => {
    const tanggal = new Date(value);
    const namaBulan = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(tanggal);
    const day = tanggal.getDate();
    const tahun = tanggal.getFullYear();

    return `${day} ${namaBulan}, ${tahun}`;
}

const labels = ref([
    "No",
    "Title",
    "created",
    "Action"
]);

const search = ref("");

// const params = reactive({
//     title: "",
//     page: 1
// });

// const pages = computed(() =>
//     Math.ceil(getCountRow.value / 5)
// );

const getItems = computed(() => store.getItems);
// const getCountRow = computed(() => store.getCountRow);

// methods
const getCategoris = () => {
    store.fetchCategories(search.value);
};

const handleSearch = () => {
    getCategoris();
}

// const pageChange = (page) => {
//     params.page = page;
// };


// watch
watch(search, (value) => {
    if (value == null || value == "") {
        getCategoris();
    }
});

onMounted(() => {
    getCategoris();
})
</script>

<template>
    <div class="container md:mx-auto max-h-[96vh] bg-white shadow-md rounded-xl">
        <div class="sticky top-20 z-10">
            <div class="bg-[#5fd1e2] min-h-[15vh] rounded-xl shadow-lg flex justify-between">
                <span class="leading-6 font-bold px-4 py-2">
                    Master Category
                </span>
                <!-- <span>
                    <img src="../../assets/extended_ramadhan_1_02.jpg" class="object-cover h-24 w-40 relative" alt="" srcset="">
                </span> -->
            </div>
        </div>
        <div class="py-8 px-4 min-h-[72vh]">
            <div class="py-4 flex sm:justify-between justify-start items-center px-4">
                <div class="relative">
                    <input type="text" id="password" v-model="search"
                        class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-[#1da2b2] transition-colors"
                        placeholder="Search...">
                    <button @click="handleSearch"
                        class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-[#1da2b2] transition-colors">
                        <svg fill="#1da2b2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                            width="24">
                            <path
                                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </button>
                </div>
                <div class="mt-auto ml-auto">
                    <button class="flex items-end justify-end rounded-full px-2 py-2 gap-1 bg-base bg-[#0097B1]">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#FFFFFF" viewBox="0 -960 960 960"
                                width="24">
                                <path
                                    d="M730-420v-120H610v-40h120v-120h40v120h120v40H770v120h-40Zm-370-84.615q-49.5 0-84.75-35.25T240-624.615q0-49.501 35.25-84.751 35.25-35.25 84.75-35.25t84.75 35.25Q480-674.116 480-624.615q0 49.5-35.25 84.75T360-504.615ZM80-215.384v-65.847Q80-306 94.423-327.577q14.423-21.577 38.808-33.5 56.615-27.154 113.307-40.731Q303.231-415.385 360-415.385q56.769 0 113.462 13.577 56.692 13.577 113.307 40.731 24.385 11.923 38.808 33.5Q640-306 640-281.231v65.847H80Zm40-40.001h480v-25.846q0-13.307-8.577-25-8.577-11.692-23.731-19.769-49.384-23.923-101.836-36.654Q413.405-375.385 360-375.385q-53.405 0-105.856 12.731Q201.692-349.923 152.308-326q-15.154 8.077-23.731 19.769-8.577 11.693-8.577 25v25.846Zm240-289.23q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 369.23Z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="overflow-x-auto h-auto relative p-4 rounded-md">
                <TableComponent :labels="labels">
                    <tbody class="divide-y divide-gray-300">
                        <tr v-for="(item, index) in getItems" :key="index">
                            <td class="py-2 px-6 text-xs">{{ index + 1 }}</td>
                            <td class="py-2 px-6 text-xs">{{ item.name }}</td>
                            <td class="py-2 px-6 text-xs">{{ formatDate(item.created_at) }}</td>
                            <td class="py-2 px-8 text-xs">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                        <path
                                            d="M500-140v-57.308l205.846-205.846 57.308 57.308L557.308-140H500ZM140-340v-40h280v40H140Zm651.154-33.846-57.308-57.308 29-29q6.385-6.385 14.154-6.385t14.154 6.385l29 29q6.385 6.385 6.385 14.154t-6.385 14.154l-29 29ZM140-500v-40h440v40H140Zm0-160v-40h440v40H140Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </TableComponent>
            </div>
        </div>
    </div>
</template>

<style scoped></style>