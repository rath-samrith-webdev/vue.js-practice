<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between gap-5 text-white p-3">
    <div class="text-white text-center">
      <h5>Portfolio</h5>
    </div>
    <div class="d-flex gap-5">
      <a href="/" class="nav-link">Home</a>
      <a href="/about" class="nav-link">About</a>
    </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
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
</style>
