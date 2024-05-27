<script>
export default {
  name: "NavBarComponent",
  data(){
    return{
      routes:[
        {
          path:'/',
          name:'Home',
        },
        {
          path:'/sign-in',
          name:'Sign in',
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex g-2 justify-content-between">
    <div class="text-white">
      logo
    </div>
    <div class="d-flex justify-content-around w-25">
      <router-link v-for="route of routes" class="nav-link text-white" :key="route" :to="route.path">{{route.name}}</router-link>
    </div>
  </nav>
</template>

<style scoped>

</style>