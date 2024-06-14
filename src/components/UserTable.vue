<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in usersData" :key="data.id">
        <td>{{ data.name }}</td>
        <td>{{ data.email }}</td>
        <td>{{ data.age }}</td>
        <td>
          <button @click="selectUser(data)" class="btn btn-info btn-sm">
            Details
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UserTable",
  methods: {
    selectUser(user) {
      this.$emit("selectUser", user);
    },
  },
  props: {
    usersData: Array,
  },
  emits: ["selectUser"],
};
</script>

<style>
.table {
  width: 100%;
  margin-top: 20px;
}
</style>
