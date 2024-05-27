<script>
export default {
  name: "NavbarComponent",
  data(){
    return {
      routes:[
        {
          path:'/',
          name:'Home',
        },
        {
          path:'/categories',
          name:'Categories',
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
    <div class="d-flex justify-content-between align-content-center w-25">
      <router-link class="nav-link text-white" v-for="route in routes" :key="route" :to="route.path">{{route.name}}</router-link>
    </div>
  </nav>
</template>

<style scoped>

</style>