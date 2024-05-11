<script>
  export default {
    name:"PersonDetail",
    data(){
      return{
        date:""
      }
    },
    computed:{
      calculate(){
        let currentDate=new Date();
        let date=this.date.toString()
        let difference=currentDate-new Date(date);
        let age= Math.floor( difference/ 31557600000);
        if(!age){
          return ""
        }else if(age>0){
          return age
        } else {
          return "Please Choose your date of birth correctly";
        }
      },
      ageColorBased(){
        let currentDate=new Date();
        let date=this.date.toString()
        let difference=currentDate-new Date(date);
        let age= Math.floor( difference/ 31557600000);
        if(!age){
          return ""
        }else if(age>0){
          return "text-start bg-success text-white"
        } else {
          return "text-start bg-danger text-white";
        }
      }
    }
  }
</script>

<template>
  <div class="d-flex gap-3">
    <div class="card flex-grow-1 p-2">
      <div class="card-title">
        <h5>Age Calculator</h5>
      </div>
      <div class="card-body">
        <form action="">
          <div class="form-group">
            <input v-model="date"  class="form-control" type="date">
          </div>
        </form>
      </div>
    </div>
    <div class="card flex-grow-1 p-2">
      <div class="card-title">
        <h5>Calculated result</h5>
      </div>
      <div class="card-body">
          <p v-bind:class="ageColorBased">Your age is: {{calculate}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>