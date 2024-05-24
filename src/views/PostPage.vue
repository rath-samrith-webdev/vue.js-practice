<script>
import axios from "axios";
export default {
  name: "PostPage",
  data(){
    return{
      posts:[],
      categories:{},
      deleteMessage:""
    }
  },
  methods:{
    async fetchCategories() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/category/list");
        if(response.data.success ==true){
          this.posts = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchCategory(event){
      try {
        const category = await axios.get("http://127.0.0.1:8000/api/category/show/"+event.target.id);
        if(category.data.success ==true){
          this.category= category.data.data;
          console.log(this.category);
        }
      }catch (err){
        console.error("Error fetching category:", err);
      }
    },
    async removeCategory(event){
      try {
        const response = await axios.delete("http://127.0.0.1:8000/api/category/delete/"+event.target.id);
        if(response.data.success == true){
          this.deleteMessage="Deleted Successfully";
        }
      }catch (err){
        console.error("Error fetching category:", err);
      }
    }
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<template>
  <table v-if="posts.length!==0" class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.name }}</td>
        <td>{{ post.description }}</td>
        <td>
          <button :id="post.id" @click="fetchCategory" class="btn-sm btn btn-outline-primary">Edit</button>
          <button :id="post.id" @click="fetchCategory" class="btn-sm btn btn-outline-primary">View</button>
          <button :id="post.id" @click="removeCategory" class="btn-sm btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <h2 v-else class="text-center text-danger">No Post at the moment</h2>
</template>

<style scoped>

</style>