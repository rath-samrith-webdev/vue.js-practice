import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import router from "@/router/router";
createApp(App)
    .use(bootstrap)
    .use(router)
    .mount('#app')
