import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/praticiens',
        name: 'Praticiens',
        component: () =>
            import ('../views/Praticiens')
    },
    {
        path: '/links',
        name: 'Links',
        component: () =>
            import ('../views/Links')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(() => {
    window.scrollTo(0, 0)
})

export default router