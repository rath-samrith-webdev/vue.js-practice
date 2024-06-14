<template>
  <div class="card mt-4">
    <div class="card-body">
      <h5 class="card-title">{{ selectuser.name }}</h5>
      <p class="card-text">
        <strong>Email: {{ selectuser.email }}</strong>
      </p>
      <p class="card-text">
        <strong>Age: {{ selectuser.age }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    selectuser: Object,
  },
};
</script>

<style>
.card {
  margin-top: 1rem;
}
</style>
