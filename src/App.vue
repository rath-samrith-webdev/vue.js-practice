<template>
  <div class="container-md">
    <nav-bar-component/>
    <router-view/>
  </div>
</template>

<script>
import navBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: 'App',
  components: {
    navBarComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
