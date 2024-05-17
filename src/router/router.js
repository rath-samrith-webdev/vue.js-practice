import {createRouter,createWebHistory} from 'vue-router'
import HomePage from "@/view/HomePage.vue";
import AboutPage from "@/view/AboutPage.vue";
import WatcherComponent from "@/view/WatcherComponent.vue";
import CalculatorComponent from "@/view/CalculatorComponent.vue";
import PopupPage from "@/view/PopupPage.vue";

const routes=[
    {
        'path':"/",
        'name':'home',
        'component':HomePage,
    },
    {
        'path':"/about",
        'name':'about',
        'component': AboutPage,
    },
    {
        'path': '/watcher',
        'name':'watcher',
        'component':WatcherComponent

    },
    {
        'path':'/calculator',
        'name':'calculator',
        'component':CalculatorComponent,
    },
    {
        'path':'/popup',
        'name':'popup',
        'component':PopupPage,
    }
]
const router=new createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
export{routes};