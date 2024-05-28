<script>
import axios from "axios";

export default {
  name: "CategoryView",
  data(){
    return {
      submissionData:{
        name:'',
        description:'',
      },
      categories:[],
      updateData:{
        id:'',
        name:'',
        description:'',
      }
    }
  },
  methods:{
    async addSubmission(){
      try {
        const response=await axios.post("http://127.0.0.1:8000/api/category/create",this.submissionData);
        if(response.status === 200){
          console.log(response.data)
        }
      }catch (err){
        console.log(err)
      }
    },
    async updateCategory(e){
      e.preventDefault();
      let newData={
        name:this.updateData.name,
        description:this.updateData.description,
      }
      try {
        const response=await axios.put("http://127.0.0.1:8000/api/category/update/"+this.updateData.id,newData);
        if(response.status === 200){
          console.log(response.data)
          location.reload();
        }
      }catch (err){
        console.log(err)
      }
    },
    async getData(event){
      event.preventDefault();
      try {
        const response=await axios.get("http://127.0.0.1:8000/api/category/show/"+event.target.id);
        if(response.status === 200) {
          this.updateData = response.data.data;
        }
      }catch (err){
        console.log(err)
      }
    },
    async removeCategory(event){
      event.preventDefault();
      try {
        const response=await axios.delete("http://127.0.0.1:8000/api/category/delete/"+event.target.id);
        if(response.status === 200){
          console.log(response.data)
        }
      }catch (err){
        console.log(err)
      }
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/category/list')
    .then(response=>{
      this.categories = response.data.data;
    }).catch(error=>{
          console.log(error)
    })
  }
}
</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label text-start">Category Name:</label>
              <input type="text" class="form-control" v-model="submissionData.name" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label text-start">Description:</label>
              <textarea class="form-control" v-model="submissionData.description" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="addSubmission" data-bs-dismiss="modal" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label text-start">Category Name:</label>
              <input type="text" class="form-control" v-model="updateData.name" id="recipient-name">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label text-start">Description:</label>
              <textarea class="form-control" v-model="updateData.description" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="updateCategory" data-bs-dismiss="modal" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-2">
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Add Category</button>
    </div>
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(category,index) in categories" :key="category.id">
          <th scope="row">{{index+1}}</th>
          <td>{{ category.name }}</td>
          <td>{{category.description}}</td>
          <td class="d-flex justify-content-sm-around">
            <button class="btn btn-danger" :id="category.id" @click="removeCategory">Delete</button>
            <button class="btn btn-primary" @click="getData" :id="category.id"  data-bs-toggle="modal" data-bs-target="#editModal">Update</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>