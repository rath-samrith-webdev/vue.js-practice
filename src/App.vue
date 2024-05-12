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
          profile: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Gold-Roger-One-Piece.jpg",
          date_of_birth:"1995/05/01"
        },
        {
          name:"Monkey D Luffy",
          profile: "data:image/jpeg;base64,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",
          date_of_birth:"1995/05/01"
        },
        {
          name:"Mashal D Teach",
          profile:"data:image/jpeg;base64,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",
          date_of_birth:"1995/05/01"
        }
        ,{
          name:"Red hair Shank",
          profile: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Shanks-Haki-Power-One-Piece.jpg",
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
          product_name: "Katsudon",
          product_img: "https://www.thespruceeats.com/thmb/9xIb4zUFvMmxgCx9-0Pam1bsAAc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/katsudon-2031259-hero-01-eaeaad239007461ab5fdb909bcf52c76.jpg",
          product_desc: "",
          product_price: 180,
        },
        {
          product_name: "Shishi",
          product_img: "https://st3.depositphotos.com/2481033/14693/i/450/depositphotos_146931955-stock-photo-the-composition-of-nigiri-sushi.jpg",
          product_desc: "",
          product_price: 250,
        }
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
