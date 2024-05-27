import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
const routes=[
    {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/categories',
        name:'categories',
        component:CategoryView
    }
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass:'border-3  border-bottom text-white',
})
export default router;