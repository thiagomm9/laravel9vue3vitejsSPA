import { createRouter, createWebHistory } from "vue-router";

import App from '@/App.vue';
import Login from '@/pages/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App
        },
        {
            path: '/login',
            name: 'login',
            components: {
                main: Login
            }
        },
    ],
})

export default router;