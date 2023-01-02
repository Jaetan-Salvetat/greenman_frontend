import { createApp } from 'vue'
import VueAxentix from "@axentix/vue";
import '@axentix/vue/dist/vue3/vue-axentix.css'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(VueAxentix).use(store).use(router).mount('#app')
