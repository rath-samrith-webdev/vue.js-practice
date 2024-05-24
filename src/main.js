import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import router from "@/router/router";
createApp(App)
    .use(bootstrap)
    .use(router)
    .mount('#app')
