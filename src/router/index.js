import { createRouter, createWebHistory} from 'vue-router';
import About from '@/views/About';
import Status from '@/views/Status';
import Setup from '@/views/Setup';
//import { defineAsyncComponent } from 'vue';

// function page(filename) {
// 	return defineAsyncComponent(() => import('../views/' + filename + '.vue'));
// }

const routes = [
    {
        path: '/',
        name: 'home',
        // component: page('Status'),
        component: Status
    },
    {
        path: '/status',
        name: 'status',
        // component: page('Status'),
        component: Status
    },
    {
        path: '/setup',
        name: 'setup',
        // component: page('Setup'),
        component: Setup
    },
    {
        path: '/about',
        name: 'about',
        // component: page('About'),
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
