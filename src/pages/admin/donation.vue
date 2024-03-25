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
    "Status",
    "Created",
    "Action"
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

const formatDate = (value) => {
    const tanggal = new Date(value);
    const namaBulan = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(tanggal);
    const day = tanggal.getDate();
    const tahun = tanggal.getFullYear();

    return `${day} ${namaBulan}, ${tahun}`;
}

const handleSearch  = () => {
    getDonation();
}


// watch
watch(params.page, () => {
    getDonation();
});

watch(params, ({title}) => {
    if(title == null || title == ""){
        getDonation();
    }
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
                    Master Donation
                </span>
                <!-- <span>
                    <img src="../../assets/extended_ramadhan_1_02.jpg" class="object-cover h-24 w-40 relative" alt="" srcset="">
                </span> -->
            </div>
        </div>
        <div class="py-8 px-4 min-h-[72vh]">
            <div class="px-4 min-h-[72vh]">
                <div class="py-4 flex sm:justify-between justify-start items-center px-4">
                    <div class="relative">
                        <input type="text" id="password" v-model="params.title"
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
                                <td class="py-2 px-6 text-xs">{{ index + 1 + (params.page - 1) * 5 }}</td>
                                <td class="py-2 px-6 text-xs">{{ item.title }}</td>
                                <td class="py-2 px-6 text-xs">
                                    <img :src="item.image" :alt="`image/${index}`"
                                        class="w-10 object-cover h-10 rounded-full">
                                </td>
                                <td class="py-2 px-6 text-xs" v-if="item.status == 0">Active</td>
                                <td class="py-2 px-6 text-xs" v-else>Non Active</td>
                                <td class="py-2 px-6 text-xs">{{ formatDate(item.created_at) }}</td>
                                <td class="py-2 px-8 text-xs">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                            width="24">
                                            <path
                                                d="M324.669-298.461q13.1 0 21.908-8.862 8.808-8.862 8.808-21.962t-8.862-21.907Q337.661-360 324.561-360t-21.907 8.862q-8.808 8.861-8.808 21.961 0 13.1 8.862 21.908 8.861 8.808 21.961 8.808Zm0-150.77q13.1 0 21.908-8.861 8.808-8.862 8.808-21.962t-8.862-21.908q-8.862-8.807-21.962-8.807t-21.907 8.861q-8.808 8.862-8.808 21.962t8.862 21.908q8.861 8.807 21.961 8.807Zm0-150.769q13.1 0 21.908-8.862 8.808-8.861 8.808-21.961 0-13.1-8.862-21.908-8.862-8.808-21.962-8.808t-21.907 8.862q-8.808 8.862-8.808 21.962t8.862 21.907Q311.569-600 324.669-600Zm123.023 290.769h215.385v-40H447.692v40Zm0-150.769h215.385v-40H447.692v40Zm0-150.769h215.385v-40H447.692v40ZM224.615-160Q197-160 178.5-178.5 160-197 160-224.615v-510.77Q160-763 178.5-781.5 197-800 224.615-800h510.77Q763-800 781.5-781.5 800-763 800-735.385v510.77Q800-197 781.5-178.5 763-160 735.385-160h-510.77Zm0-40h510.77q9.23 0 16.923-7.692Q760-215.385 760-224.615v-510.77q0-9.23-7.692-16.923Q744.615-760 735.385-760h-510.77q-9.23 0-16.923 7.692Q200-744.615 200-735.385v510.77q0 9.23 7.692 16.923Q215.385-200 224.615-200ZM200-760v560-560Z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </TableComponent>
                    <div class="py-8 px-4">
                        <Pagination :totalPages="pages" :totalData="getCountRow" :currentPage="params.page" :pageSize="5"
                            @pageChange="pageChange" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>