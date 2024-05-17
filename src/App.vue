<template>
  <nav class="navbar navbar-expand-lg d-flex justify-content-center">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <router-link class="navbar-brand" to="/about">About</router-link>
    <router-link class="navbar-brand" to="/watcher">Contact</router-link>
    <router-link class="navbar-brand" to="/calculator">Calculator</router-link>
    <router-link class="navbar-brand" to="/popup">Calculator</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.router-link-exact-active {
  text-decoration: none;
  color: white;
  border-bottom: 5px solid blue;
}
</style>
