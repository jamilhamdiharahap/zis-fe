import { roleGuard } from "../utils/guard";

import donationIndex from "../pages/dashboard/donation/index.vue";
import testimoniVue from "../pages/dashboard/donation/testimoni.vue";
import zakatCalculate from "../pages/dashboard/donation/zakat.vue";


const userRoutes = [
    {
        path: '',
        name: 'donation',
        component: donationIndex,
        meta: {
            title: 'Donation',
            allowedRoles: ['User']
        },
        beforeEnter: roleGuard,
    },
    {
        path: 'testimoni',
        name: 'testimoni',
        component: testimoniVue,
        meta: {
            title: 'Testimoni',
            allowedRoles: ['User']
        },
        beforeEnter: roleGuard,
    },
    {
        path: 'calculate',
        name: 'calculate',
        component: zakatCalculate,
        meta: {
            title: 'Calculate',
            allowedRoles: ['User']
        },
        beforeEnter: roleGuard,
    },
];

export default userRoutes;
