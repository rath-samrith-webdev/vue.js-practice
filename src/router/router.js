import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import merchItem from "@/views/merchItem.vue";
import PostPage from "@/views/PostPage.vue";
const routes=[
    {
        'path':'/',
        'name':'home',
        'component':HomePage
    },
    {
        'path':'/about',
        'name':'about',
        'component':AboutPage
    },
    {
        'path':'/merch',
        'name':'merch',
        'component':merchItem
    },
    {
        'path':'/categories',
        'name':'post',
        'component':PostPage
    }
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass:'text-white nav-btn',
})
export default router;