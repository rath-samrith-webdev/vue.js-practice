<template>
  <div class="row d-flex justify-content-center gap-5">
    <div class="card col-2" v-bind:style="{background:getColor}">
      <div class="form-group">
        <label>First name</label>
        <input type="text" class="form-control" placeholder="First name" v-model:="firstname">
        <label for="">Last name</label>
        <input type="text" class="form-control" placeholder="Last name" v-model:="lastname">
        <label for="">Style color</label>
        <input type="color" class="form-control" placeholder="First name" v-model:="text_color">
      </div>
    </div>
    <div class="card col-2" >
      <h2 v-bind:style="{color:getColor}">{{firstname}} {{lastname}}</h2>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      firstname: "",
      lastname: "",
      text_color: ""
    }
  },
  computed:{
    getColor(){
      return this.text_color
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
