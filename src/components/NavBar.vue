<script>
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import merchItem from "@/views/merchItem.vue";
import PostPage from "@/views/PostPage.vue";
import {toUpperCase} from "uri-js/dist/esnext/util";

export default {
  name: "NavBar",
  methods: {toUpperCase},
  data(){
    return{
      routes:[
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
          'path':'/post',
          'name':'post',
          'component':PostPage
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark text-white navbar-expand-md navbar-nav-scroll d-flex gap-2 p-2 justify-content-between align-items-center">
    <div class="d-flex gap-2 w-50">
      <h4>Shoe Store</h4>
    </div>
    <div class="d-flex gap-2 w-40 justify-content-around">
      <router-link v-for="route in routes" :key="route" class="nav-link p-2" :to="route.path">{{ toUpperCase(route.name) }}</router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav-btn{
  border-bottom: 2px solid #fff;
}
</style>