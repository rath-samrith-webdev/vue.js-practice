<script>
export default {
  name: "UserDetail",
  props:['user']
}
</script>

<template>
  <div class="card">
    <div class="card-header">User Profile</div>
    <div class="card-body">
      <p class="card-text"><strong>Name:</strong> {{ user.name }}</p>
      <p class="card-text"><strong>Age:</strong> {{ user.age }}</p>
      <p class="card-text"><strong>Location:</strong> {{user.address}}</p>
    </div>
    <div class="card-footer text-center">
      <button class="btn btn-primary">Contact</button>
    </div>
  </div>
</template>

<style scoped>

</style>