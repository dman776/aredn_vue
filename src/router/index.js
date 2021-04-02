import { createRouter, createWebHistory} from 'vue-router';
import About from '@/views/About';
import Status from '@/views/Status';
import Setup from '@/views/Setup';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Status
    },
    {
        path: '/status',
        name: 'Status',
        component: Status
    },
    {
        path: '/setup',
        name: 'Setup',
        component: Setup
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
