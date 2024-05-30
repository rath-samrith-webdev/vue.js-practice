<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1>StudentList</h1>
      <router-link class="btn btn-sm btn-outline-primary" to="/students/create"
        >Add Student</router-link
      >
    </div>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Province</th>
            <th>Score</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.id">
            <td>{{ index +1}}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.province }}</td>
            <td>{{ student.score }}</td>
            <td>{{ student.phone_number }}</td>
            <td class="d-flex justify-content-around">
              <button
                @click="removeStudent(student.id)"
                class="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
              <router-link
                class="btn btn-sm btn-outline-primary"
                :to="{ name: 'edit-student', params: { id: student.id } }"
                >Update</router-link
              >
              <router-link
                class="btn btn-sm btn-outline-primary"
                :to="{ name: 'view-student', params: { id: student.id } }"
                >Views</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentList",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    async fetchStudents() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/student/list"
        );
        if (response.data.success) {
          this.students = response.data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async removeStudent(id) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/student/delete/${id}`
        );
        if (response.data.success) {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
