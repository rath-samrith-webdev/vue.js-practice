<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      axios
        .post("http://localhost:8000/login", this.formData)
        .then((res) => {
          console.log(res);
          if (res.data.sucesss) {
            localStorage.setItem("token", res.data.token);
            this.$router.push({ name: "home" });
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<template>
  <div class="container-md mt-2">
    <form class="form-horizontal d-flex flex-column gap-2">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="formData.email"
          id="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="formData.password"
          id="password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="confirm">Confirm Password</label>
        <input
          type="password"
          v-model="formData.password_confirmation"
          id="confirm"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button @click="handleSubmit" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
