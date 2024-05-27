import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";

const routes=[
    {
        path:"/",
        name:'home',
        component:HomeComponent
    },
    {
        path:'/sign-in',
        name:'login',
        component:SignIn
    }
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router