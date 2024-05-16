<script>
export default {
  name: "CalculatorComponent",
  data() {
    return {
      total:100,
      newCurrent:"",
      message:'',
      currency:''
    };
  },
  watch:{
    newCurrent(Value){
      if(this.total>=Value){
        this.message="Payable"
        this.currency='bg-success text-white'
      }else {
        this.message="You don't have enough to pay"
        this.currency='bg-danger text-white text-center'
      }
    }
  }
}
</script>

<template>
<div class="container-md">
  <form class="d-flex flex-column justify-content-around p-2">
    <div class="form-group">
      <p class="bg-primary text-white text-center">{{total}}</p>
    </div>
    <div class="form-group">
      <p v-if="newCurrent>0" :class="currency">{{ message }}</p>
    </div>
    <div class="form-group row">
      <input type="number" class="form-control" v-model="newCurrent" placeholder="Password" />
    </div>
  </form>
</div>
</template>

<style scoped>

</style>