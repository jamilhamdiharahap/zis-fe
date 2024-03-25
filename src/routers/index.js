import { createRouter, createWebHistory } from 'vue-router';

import userRoutes from './userRouters.js';
import adminRoutes from './adminRoutes.js';
import indexVue from '../pages/index.vue';
import adminIndex from "../pages/admin/index.vue";
import userIndex from "../pages/dashboard/index.vue";
import Error from "../pages/error.vue";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: indexVue,
        meta: { title: 'Login' },
    },
    {
        path: '',
        redirect: {name: "Login"},
    },
    {
        path: "/error",
        name: "Not Found",
        component: Error,
        meta: { title: 'Login' },
    },
    {
        path: '/zis',
        component: userIndex,
        name: 'zisUser',
        meta: {
            allowedRoles: ['User'],
        },
        children: userRoutes,
    },
    {
        path: '/zis/dashboard',
        name: 'zisAdmin',
        component: adminIndex,
        meta: {
            allowedRoles: ['Admin'],
        },
        children: adminRoutes,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
