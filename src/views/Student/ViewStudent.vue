<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-2">
      <div class="card-header">
        <h3 class="text-center">Student information</h3>
      </div>
      <div class="col-md-12">
        <h5>Name: {{student.name}}</h5>
      </div>
      <div class="col-md-12">
        <h5>Age: {{student.age}}</h5>
      </div>
      <div class="col-md-12">
        <h5>Province: {{student.province}}</h5>
      </div>
      <div class="col-md-12">
        <h5>Score: {{student.score}}</h5>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <router-link class="btn btn-sm btn-outline-secondary" to="/students">Return</router-link>
        <router-link class="btn btn-sm btn-outline-primary" :to="{ name: 'edit-student', params: { id: student.id } }">Update</router-link>
        <button @click="removeStudent(student.id)" class="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "viewStudent",
  props:['id'],
  data(){
    return{
      student:{}
    }
  },
  mounted() {
    this.fetchStudent()
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
  }
}
</script>

<style></style>
