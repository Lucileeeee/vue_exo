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
            name: 'Tp1',
            component: () => import('../views/exo/Tp1.vue')
        },
        {
            path: '/EventBinding',
            name: 'EventBinding',
            component: () => import('../views/exo/EventBinding.vue')
        },
        {
            path: '/ClientX',
            name: 'ClientX',
            component: () => import('../views/exo/ClientX.vue')
        },
        {
            path: '/TpEventBinding',
            name: 'TpEventBinding',
            component: () => import('../views/exo/TpEventBinding.vue')
        },
        {
            path: '/ComputedBug',
            name: 'ComputedBug',
            component: () => import('../views/exo/ComputedBug.vue')
        },
        {
            path: '/Watchers',
            name: 'Watchers',
            component: () => import('../views/exo/Watchers.vue')
        },
        {
            path: '/Tp2',
            name: 'Tp2',
            component: () => import('../views/exo/Tp2.vue')
        },
        {
            path: '/Style',
            name: 'Style',
            component: () => import('../views/exo/Style.vue')
        },
        {
            path: '/StyleClass',
            name: 'StyleClass',
            component: () => import('../views/exo/StyleClass.vue')
        },
        {
            path: '/Tp3',
            name: 'Tp3',
            component: () => import('../views/exo/Tp3.vue')
        },
    ]
});

export default router;