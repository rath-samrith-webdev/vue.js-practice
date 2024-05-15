import {createRouter,createWebHistory} from 'vue-router'
import HomePage from "@/view/HomePage.vue";
import AboutPage from "@/view/AboutPage.vue";

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
    }
]
const router=new createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;