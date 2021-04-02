import 'mdb-vue-ui-kit/css/mdb.min.css';
// import '@fortawesome/vue-fontawesome';
//import '@fortawesome/fontawesome-free/css/all.css'
//import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'

import { createApp } from 'vue';

import App from './App.vue';

createApp(App).use(router).mount('#app');
