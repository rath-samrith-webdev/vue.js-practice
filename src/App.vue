<template>
  <div class="container-md">
    <NavBar/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active {
  background: #42b983;
  color: white;
  text-decoration: none;
  height: 100%;
}
</style>
