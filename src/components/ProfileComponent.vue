<script>
export default {
  name: "ProfileComponent",
  emits: ["showmore"],
  props: ["user"],
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="user.img" class="card-img-top" :alt="user.name" />
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <p class="card-text">Age: {{ user.age }}</p>
      <button @click="$emit('showmore', this.user)" class="btn btn-primary">
        Go somewhere
      </button>
    </div>
  </div>
</template>

<style scoped></style>
