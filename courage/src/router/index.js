import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: '/lessonsTextInter',
            name: 'lessonsTextInter',
            component: () => import('../views/lessons/LessonTextInterpolation.vue')
        },
        {
            path: '/ComposantTest',
            name: 'ComposantTest',
            component: () => import('../views/exo/ComposantTest.vue')
        },
    ]
});

export default router;