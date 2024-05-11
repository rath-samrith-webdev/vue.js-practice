<template>
  <div class="container-md d-flex justify-content-center flex-column gap-3">
    <div class="bg-primary text-white text-center">
      <h4>Welcome to our store</h4>
    </div>
    <div class="container-sm d-flex justify-content-around gap-3">
      <div v-for="item in products" :key="item" class="card p-2">
        <div class="d-flex">
          <div class="d-flex flex-column align-items-center p-4">
            <p>{{ item.product_name }}</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <img
              v-bind:src="item.product_img"
              class="img-fluid img-thumbnail"
              width="100"
              :alt="item.product_name"
            />
          </div>
        </div>
        <div class="card-body">
          <p v-if="item.product_price > 100" class="bg-success text-white">
            {{ item.product_price }}
          </p>
          <p v-else class="bg-warning text-white">
            {{ item.product_price }}
          </p>
        </div>
        <button class="btn btn-sm btn-outline-primary">See Details</button>
      </div>
    </div>
  </div>
  <div
    class="container-md d-flex justify-content-center flex-column gap-3 mt-3"
  >
    <div class="bg-success-subtle text-center">
      <h4>Users Feedback</h4>
    </div>
    <div class="container-sm d-flex justify-content-center gap-3">
      <form class="card flex-grow-1 p-2">
        <div class="bg-success text-white text-center">
          <h4>Registration form</h4>
        </div>
        <div class="d-flex form-group justify-content-between gap-3">
          <div class="d-flex flex-column flex-grow-1 form-group">
            <label class="text-start" for="username">First name</label>
            <input
              v-model="firstname"
              type="text"
              class="form-control"
              id="username"
              required
            />
          </div>
          <div class="d-flex flex-column flex-grow-1 form-group">
            <label class="text-start" for="lastname">Last name</label>
            <input
              v-model="lastname"
              type="text"
              class="form-control"
              id="lastname"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <div class="d-flex flex-column flex-grow-1 form-group">
            <label class="text-start" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
      </form>
      <div class="card flex-grow-1 p-2">
        <div class="bg-primary text-white text-center">
          <h4>Verify Status</h4>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between gap-3">
            <h6 class="text-start">First name : {{ firstname }}</h6>
            <p class="text-start">Status : {{ f_nameState }}</p>
          </div>
          <div class="d-flex justify-content-between gap-3">
            <h6 class="text-start">Last name : {{ lastname }}</h6>
            <p class="text-start">Status: {{ l_nameState }}</p>
          </div>
          <div class="d-flex justify-content-between gap-3">
            <h6 class="text-start">Email : {{ email }}</h6>
            <p class="text-start">Status : {{ e_mailState }}</p>
          </div>
        </div>
        <div v-if="f_nameState && l_nameState && e_mailState === 'Pass'" class="text-success text-center">
          <h6>You can now register your account.</h6>
        </div>
      </div>
    </div>
    <PersonDetail/>
    <div class="container-md d-flex justify-content-center flex-column gap-3 mt-3">
      <div class="bg-success-subtle text-center">
        <h4>Student Profiles</h4>
      </div>
      <div class="container-sm d-flex justify-content-around gap-3">
          <StudentProfile v-for="student in students" :key="student.id" :student="student" />
      </div>
    </div>
  </div>
</template>

<script>
import PersonDetail from "@/components/PersonDetail.vue";
import StudentProfile from "@/components/StudentProfile.vue";
export default {
  name: "App",
  components:{
    PersonDetail,
    StudentProfile
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm: "",
      students:[
        {
          name:"Gold D Roger",
          date_of_birth:"1995/05/01"
        },
        {
          name:"Monkey D Luffy",
          date_of_birth:"1995/05/01"
        },
        {
          name:"Mashal D Teach",
          date_of_birth:"1995/05/01"
        }
        ,{
          name:"Red hair Shank",
          date_of_birth:"1995/05/01"
        }
      ],
      products: [
        {
          product_name: "Ramen",
          product_img:
            "https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-f.jpg",
          product_desc: "",
          product_price: 150,
        },
        {
          product_name: "Onigiri",
          product_img:
            "https://morocooked.com/wp-content/uploads/2022/10/Final-2_1.18.1-min-e1664826921949.jpg",
          product_desc: "",
          product_price: 100,
        },
        {
          product_name: "Ramen",
          product_img:
            "https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-f.jpg",
          product_desc: "",
          product_price: 100,
        },
      ],
    };
  },
  computed: {
    f_nameState() {
      if (this.lastname === "") {
        return "";
      } else {
        if (this.firstname.length > 1) {
          return "Pass";
        } else {
          return "Verification Failed";
        }
      }
    },
    l_nameState() {
      if (this.lastname === "") {
        return "";
      } else {
        if (this.lastname.length > 1) {
          return "Pass";
        } else {
          return "Verification Failed";
        }
      }
    },
    e_mailState() {
      if (this.email === "") {
        return "";
      } else {
        if (this.email.length > 1) {
          return "Pass";
        } else {
          return "Verification Failed";
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}
</style>
