<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) in employee" :key="index">
        <td>{{ person.name }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.name }}</td>
        <td>
          <button class="btn btn-info btn-sm" @click="showDetail(person)">
            Details
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "EmployeeTable",
  props: ["employee"],
  methods:{
    showDetail(person) {
      this.$emit("showDetail", person);
    }
  }
};
</script>

<style>
.table {
  width: 100%;
  margin-top: 20px;
}
</style>
