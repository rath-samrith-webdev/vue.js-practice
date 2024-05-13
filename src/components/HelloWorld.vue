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
        <button class="btn btn-primary" @click="show">Submit</button>
      </div>
    </form>
   <div id="modals" class="card p-3">
      <div class="card-header">
        <h3>Information</h3>
      </div>
     <div class="card-body">
       <h4>Name: {{name}}</h4>
       <h4>Age: {{age}}</h4>
       <h4>Password: {{password}}</h4>
     </div>
   </div>
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
      if(value<200){
        if(value>0){
          this.message['age']=''
        }else {
          this.message['age']='Age must greater than 0'
        }
      }else {
        this.message['age']='Age must be less than 200'
      }
    },
    name(value){
      this.name= value
      if(value.length>15){
        this.message['name']='Name must be less than 15'
      }else{
        if(value.length>3){
          this.message['name']=''
        }else {
          this.message['name']='Name must be greater than 3 character'
        }
      }
    },
    password(value){
      this.password = value
      if(value.length>100){
        this.message['password']='Password must be less than 100'
      }else{
        if(value.length > 8){
          this.message['password']=''
        }else {
          this.message['password'] = 'Password must be greater 8 characters'
        }
      }
    }
  },
  methods:{
    show(event){
      event.preventDefault()
      console.log(document.getElementById('modals'))
      document.getElementById('modals').classList.toggle('show')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#modal{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.card{
  display: none;
}
.show{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  display: block;
}
</style>
