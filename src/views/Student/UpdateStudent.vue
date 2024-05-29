<template>
  <div class="row">
    <form @submit.prevent="updateStudent">
      <div class="form-group">
        <label for="name">Student Name</label>
        <input type="text" v-model="student.name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          name="age"
          v-model="student.age"
          id="age"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="score">Score</label>
        <input
          type="number"
          name="score"
          v-model="student.score"
          id="score"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          v-model="student.phone_number"
          id="phone"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="province">Province</label>
        <input
          type="text"
          name="province"
          v-model="student.province"
          id="province"
          class="form-control"
        />
      </div>
      <div class="btn-group pt-2">
        <button type="submit" class="btn btn-primary">Update Student</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "updateStudent",
  data() {
    return {
      student: {
        name: "",
        age: "",
        score: "",
        province: "",
        phone_number: "",
      },
    };
  },
  props: ["id"],
  mounted() {
    this.fetchStudent();
  },
  methods: {
    async fetchStudent() {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/student/show/${this.id}`
        );
        if (res.data.success) {
          this.student = res.data.data;
          console.log(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async updateStudent() {
      try {
        const res = await axios.put(
          `http://localhost:8000/api/student/update/${this.id}`,
          this.student
        );
        if (res.data.success) {
          this.$router.push("/students");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
