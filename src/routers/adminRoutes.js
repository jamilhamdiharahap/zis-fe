import { roleGuard } from "../utils/guard";
import donationAdmin from "../pages/admin/donation.vue";
import categoryAdmin from "../pages/admin/category.vue";
import zisAdmin from "../pages/admin/zis.vue";

const adminRoutes = [
    {
        path: '',
        name: 'donationAdmin',
        component: donationAdmin,
        meta: {
            title: 'Donation',
            allowedRoles: ['Admin'],
        },
        beforeEnter: roleGuard,
    },
    {
        path: 'category',
        name: 'category',
        component: categoryAdmin,
        meta: {
            title: 'Category',
            allowedRoles: ['Admin'],
        },
        beforeEnter: roleGuard,
    },
    {
        path: 'zis',
        name: 'zis',
        component: zisAdmin,
        meta: {
            title: 'zis',
            allowedRoles: ['Admin'],
        },
        beforeEnter: roleGuard,
    },
];

export default adminRoutes;
