<script>
export default {
  name: "ProfileTable",
  props: ["information"],
};
</script>

<template>
  <table class="table mt-5">
    <thead>
      <tr>
        <th scope="col">Profile</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <img
            :src="information.img"
            :alt="information.name"
            class="rounded-circle"
            style="width: 50px; height: 50px"
          />
        </th>
        <td>{{ information.name }}</td>
        <td>{{ information.age }}</td>
        <td>{{ information.gender }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
