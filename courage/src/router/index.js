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
        {
            path: '/Function',
            name: 'Function',
            component: () => import('../views/exo/Function.vue')
        },
        {
            path: '/Inline',
            name: 'Inline',
            component: () => import('../views/exo/Inline.vue')
        },
        {
            path: '/Tp1',
            name: 'Tp',
            component: () => import('../views/exo/Tp1.vue')
        },
    ]
});

export default router;