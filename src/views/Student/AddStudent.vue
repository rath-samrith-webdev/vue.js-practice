<template>
  <div class="row">
    <form @submit.prevent="addStudent">
      <div class="form-group">
        <label for="name">Student Name</label>
        <input type="text" v-bind="student.name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          name="age"
          v-bind="student.age"
          id="age"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="score">Score</label>
        <input
          type="number"
          name="score"
          v-bind="student.score"
          id="score"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          v-bind="student.phone_number"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="province">Province</label>
        <input
          type="text"
          name="province"
          id="province"
          v-bind="student.province"
          class="form-control"
        />
      </div>
      <div class="btn-group">
        <button type="submit" class="btn btn-primary">Add Student</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "createStudent",
  data() {
    return {
      student: {
        name: "",
        age: "",
        score: "",
        phone_number: "",
        province: "",
      },
    };
  },
  methods: {
    async addStudent() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/student/create",
          this.student
        );
        if (response.data.sucess) {
          this.$router.push({ name: "students" });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
