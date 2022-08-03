import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/about",
        component:  () =>  import('../pages/BookinfoPage')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;