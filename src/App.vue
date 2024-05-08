<template>
  <div class="row p-3 d-flex justify-content-center align-content-center">
    <div class="row-cols-2">
      <input class="form-control-sm"
          type="text"
          placeholder="Please Enter First Name ..."
          v-model="first_name"
      />
      <input class="form-control-sm"
          type="text"
          placeholder="Please Enter Last Name ..."
          v-model="last_name"
      />
      <input class="form-control-sm" type="number" placeholder="Please Enter Age..." v-model="age" />
      <input class="form-control-sm" type="date" v-model="date_of_birth" />
    </div>
    <div class="card row-cols-2">
      <p>Your first name is: {{ first_name }}</p>
      <p>Your last name is: {{ last_name }}</p>
      <p>Your age is: {{ age }}</p>
      <p>Your full name is: {{ getFullName }}</p>
      <p :class="{color_status}">Your Your Status: {{ getStatus }}</p>
      <p>Your date of birth is: {{ date_of_birth }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      age: "",
      date_of_birth: "",
      color:'',
    };
  },
  computed: {
    getFullName() {
      return this.first_name + " " + this.last_name;
    },
    getStatus() {
      if (!this.age) {
        return "";
      } else if (this.age >= 18) {
        return "Adult";
      } else {
        return "Child";
      }
    },
    color_status(){
      if (!this.age) {
        return "";
      } else if (this.age >= 18) {
        return "bg-primary";
      } else {
        return "bg-danger";
      }
    }
  },
};
</script>

<style>
h1 {
  color: red;
}

div {
  text-align: center;
}
</style>