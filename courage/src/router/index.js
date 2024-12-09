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
            path: '/LessonAttributeBindingView',
            name: 'LessonAttributeBindingView',
            component: () => import('../views/lessons/LessonAttributeBindingView.vue')
        },
        {
            path: '/LessonComputedProperties',
            name: 'LessonComputedProperties',
            component: () => import('../views/lessons/LessonComputedProperties.vue')
        },
        {
            path: '/LessonDynamicStyling',
            name: 'LessonDynamicStyling',
            component: () => import('../views/lessons/LessonDynamicStyling.vue')
        },
        {
            path: '/LessonEventBindingView',
            name: 'LessonEventBindingView',
            component: () => import('../views/lessons/LessonEventBindingView.vue')
        },
        {
            path: '/LessonInlineTemplatingView',
            name: 'LessonInlineTemplatingView',
            component: () => import('../views/lessons/LessonInlineTemplatingView.vue')
        },
        {
            path: '/LessonMethods',
            name: 'LessonMethods',
            component: () => import('../views/lessons/LessonMethods.vue')
        },
        {
            path: '/LessonTextInterpolation',
            name: 'LessonTextInterpolation',
            component: () => import('../views/lessons/LessonTextInterpolation.vue')
        },
        {
            path: '/lessonsTextInter',
            name: 'lessonsTextInter',
            component: () => import('../views/lessons/LessonTwoWayBinding.vue')
        },
        {
            path: '/LessonWatchers',
            name: 'LessonWatchers',
            component: () => import('../views/lessons/LessonWatchers.vue')
        },
        {
            path: '/LessonListRendering',
            name: 'LessonListRendering',
            component: () => import('../views/lessons/LessonListRendering.vue')
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
            component: () => import('../views/tp/Tp1.vue')
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
            component: () => import('../views/tp/Tp2.vue')
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
            path: '/V-For',
            name: 'V-For',
            component: () => import('../views/exo/V-For.vue')
        },
        {
            path: '/Tp3',
            name: 'Tp3',
            component: () => import('../views/tp/Tp3.vue')
        },
        {
            path: '/Tp4_ConditionalRender',
            name: 'Tp4_ConditionalRender',
            component: () => import('../views/tp/Tp4_ConditionalRender.vue')
        },
    ]
});

export default router;