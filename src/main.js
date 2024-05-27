import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
createApp(App)
    .use(bootstrap)
    .use(router)
    .mount('#app')
