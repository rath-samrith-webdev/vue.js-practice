<script>
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
        },
        {
          'path':'/about',
          'name':'about',
        },
        {
          'path':'/merch',
          'name':'merch',
        },
        {
          'path':'/categories',
          'name':'categories',
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