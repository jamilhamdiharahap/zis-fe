<template>
    <div>
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#F2F2F2]">
            <Header>
                <PageTitle :text="breadcrumbs" />
            </Header>
            <Sidebar />
            <div class="h-full ml-14 mt-14 mb-10 md:ml-64 pr-4 pl-2">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import PageTitle from '../components/PageTitle.vue';
import Header from '../components/partials/Header.vue';
import Sidebar from '../components/partials/Sidebar.vue';

const route = useRoute();
const breadcrumbs = computed(() => {
    return route.meta.title;
})

</script>