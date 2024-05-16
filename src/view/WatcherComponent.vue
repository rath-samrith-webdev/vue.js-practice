<script>
export default {
  name: "WatcherComponent",
  data() {
    return {
      password: "",
      confirmPassword: "",
      confirm: "",
      color: "",
      total:100,
      newCurrent:"",
      message:'',
      currency:''
    };
  },
  watch: {
    confirmPassword(value) {
      if (value != this.password) {
        this.confirm = "Passwords do not match";
        this.color = "text-danger";
      } else {
        this.color = "text-success";
        this.confirm = "Passwords match";
      }
    },
  }
};
</script>

<template>
  <div class="container-md">
    <form class="d-flex flex-column p-2">
      <div class="form-group row">
        <input class="form-control" type="password" v-model="password" placeholder="Password" />
        <input class="form-control" type="password" v-model="confirmPassword" placeholder="Confirm Password"/>
      </div>
      <span :class="color">{{ confirm }}</span>
    </form>
  </div>
</template>

<style scoped></style>
