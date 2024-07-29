import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'; 
import router from './router/router.js';
import {VueQueryPlugin} from '@tanstack/vue-query'
const app= createApp(App)
app.use(router);
app.use(VueQueryPlugin);
app.use(store); 
app.mount('#app')
