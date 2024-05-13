<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="d-flex flex-column gap-2">
      <div class="d-flex flex-column">
        <label for="first" class="text-start">Name</label>
        <input class="form-control" type="text" id="first" name="first" v-model="name"  placeholder="First Name" />
        <span class="text-danger" v-if="message.name">{{message.name}}</span>
      </div>
      <div class="d-flex flex-column">
        <label for="last" class="text-start">Age</label>
        <input class="form-control" type="number" id="last" v-model="age" name="last" placeholder="Age" />
        <span class="text-danger" v-if="message.age">{{message.age}}</span>
      </div>
      <div class="d-flex flex-column">
        <label for="password" class="text-start">Password</label>
        <input class="form-control" type="password" id="password" v-model="password" name="password" placeholder="password" />
        <span class="text-danger" v-if="message.password">{{message.password}}</span>
      </div>
      <div class="d-flex flex-column">
        <button class="btn btn-primary" @click="confirm">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      name:"",
      age:null,
      password:null,
      is_confirmed:false,
      message:[]
    }
  },
  watch:{
    age(value){
      this.age = value;
      if(value>0){
        this.message['age']=''
      }else {
        this.message['age']='Age must greater than 0'
      }
    },
    name(value){
      this.name = value
      if(value.length>3){
        this.message['name']=''
      }else {
        this.message['name']='Name must be greater than 3 character'
      }
    },
    password(){
      if(this.password.length > 8){
        this.message['password']=''
      }else {
        this.message['password'] = 'Password must be greater 8 characters'
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
