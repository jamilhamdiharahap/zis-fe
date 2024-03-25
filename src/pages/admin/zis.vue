<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useDonationStore } from '../../stores/donation';
import Pagination from '../../components/Pagination.vue';
import TableComponent from '../../components/TableComponent.vue';

const store = useDonationStore();

const labels = ref([
    "No",
    "Title",
    "Image",
    "Desription",
    "Status"
]);

const params = reactive({
    title: "",
    page: 1
});

const pages = computed(() =>
    Math.ceil(getCountRow.value / 5)
);

const getItems = computed(() => store.getItems);
const getCountRow = computed(() => store.getCountRow);

// methods
const getDonation = () => {
    store.fetchDonations(params);
};

const pageChange = (page) => {
    params.page = page;
};


// watch
watch(params, ({ page }) => {
    getDonation();
});

onMounted(() => {
    getDonation();
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
                    <input type="text" id="password"
                        class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-[#1da2b2] transition-colors"
                        placeholder="Search...">
                    <button
                        class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-[#1da2b2] transition-colors">
                        <svg fill="#1da2b2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </button>
                </div>
                <button class="mdc-button rounded-xl bg-[#12590f]">
                    <i class="material-icons mdc-button__icon text-white" aria-hidden="true">add</i>
                    <span class="mdc-button__label text-white">new</span>
                </button>
            </div>
            <div class="overflow-x-auto h-auto relative p-4 rounded-md">
                <TableComponent :labels="labels">
                    <tbody class="divide-y divide-gray-300">
                        <tr v-for="(item, index) in getItems" :key="index">
                            <td class="py-2 px-6 text-xs">{{ index + 1 + (params.page - 1) * 5 }}</td>
                            <td class="py-2 px-6 text-xs">{{ item.title }}</td>
                            <td class="py-2 px-6 text-xs">
                                <img :src="item.image" :alt="`image/${index}`" class="w-10 object-cover h-10 rounded-full">
                            </td>
                            <td class="py-2 px-6 text-xs">Admin</td>
                            <td class="py-2 px-6 text-xs">Admin</td>
                        </tr>
                    </tbody>
                </TableComponent>
                <div class="py-8 px-4">
                    <Pagination :totalPages="pages" :totalData="getCountRow" :currentPage="params.page" :pageSize="5"
                        @pageChange="pageChange" />
                </div>
            </div>
        </div>
</div></template>

<style scoped></style>