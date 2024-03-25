import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';
import './style.css';
import App from './App.vue';
import router from './routers/index.js';

router.beforeEach((to, from, next) => {
    document.title = to.meta.title == undefined ? '': "Page | " + to.meta.title  || 'Title';
    next();
});

createApp(App).
    use(router).
    use(createPinia()).
    use(VueCookies).
    mount('#app');
