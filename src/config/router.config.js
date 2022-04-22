import { createRouter, createWebHashHistory } from 'vue-router'


const publicRoutes = [
    {
        path: '/',
        redirect: { path: '/index' }
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue')
    },
    // {
    //     path: '/404',
    //     name: '404',
    //     component: () => import('../views/404')
    // },
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: () => import('../views/home'),
    //     redirect: '/welcome',
    //     children: [
    //         {
    //             path: '/:pathMatch(.*)*',    // 捕获所有路由或 404 Not found 路由
    //             component: () => import('../views/welcome')
    //         }
    //     ]
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRoutes
})

export default router
