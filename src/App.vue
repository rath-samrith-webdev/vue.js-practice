<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <h4 class="text-center text-bg-info col-md-3">Exercise</h4>
    </div>
    <div class="row justify-content-center gap-5">
      <div class="card col-md-3">
        <div class="card-header bg-primary-subtle">
          <h4 class="text-center">Submission Form</h4>
        </div>
        <div class="card-body">
          <div class="form-group d-flex flex-column">
            <label for="">First name</label>
            <input type="text" placeholder="First name" v-model="name" />
          </div>
          <div class="form-group d-flex flex-column">
            <label for="">Last name</label>
            <input type="text" placeholder="First name" v-model="lastname" />
          </div>
          <div class="form-group d-flex flex-column">
            <label for="">Gender</label>
            <select v-model="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="form-group d-flex flex-column">
            <label for="">Age</label>
            <input type="text" placeholder="Age" v-model="age" />
          </div>
          <div class="form-group d-flex flex-column">
            <label for="">Score</label>
            <input type="number" placeholder="Score" v-model="score" />
          </div>
          <div class="btn-group d-flex gap-1 justify-content-around mt-1">
            <button class='btn btn-sm btn-outline-primary' type="submit">Submit Data</button>
            <button class='btn btn-sm btn-outline-danger'>Cancel Submit</button>
          </div>
        </div>
      </div>
      <div class="card col-md-3">
        <div class="card-header bg-warning-subtle">
          <h4 class="text-center">Information</h4>
        </div>
        <div class="card-body">
          <div class="b-avatar-img rounded-circle">
            <img v-bind:src="getStatus" class="img-fluid" alt="User Profile">
          </div>
          <h5>First name: {{ getFirstname }}</h5>
          <h5>Last name: {{ getLastname }}</h5>
          <h5>Gender: {{ getGender }}</h5>
          <h5>Status:  <span v-bind:style="{color:getAgeColor}">{{ getAge }}</span></h5>
          <h5>Score: {{ score }}</h5>
          <h5>Grade: <span v-bind:style="{color:getScoreColor}">{{ getScore }}</span></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      lastname: "",
      gender: "",
      age: "",
      ageState: "",
      score: '',
    };
  },
  computed: {
    getFirstname() {
      return this.name;
    },
    getLastname() {
      return this.lastname;
    },
    getGender() {
      return this.gender;
    },
    getAge() {
      if (!this.age) {
        return ""
      }else if(this.age<18){
        return 'Child'
      }else if(this.age>=18) {
        return 'Adult'
      }else {
        return 'Old'
      }
    },
    getAgeColor() {
      if (!this.age) {
        return ""
      }else if(this.age<18){
        return 'green'
      }else {
        return 'teal'
      }
    },
    getStatus(){
      if(this.age>=18){
        return "https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNvbWUlMjBndXl8ZW58MHx8MHx8fDA%3D"
      }else if(this.age>45){
        return "https://upload.wikimedia.org/wikipedia/commons/4/46/My_Grandfather_Photo_from_January_17.JPG"
      }else if(this.age<45) {
        return "https://i2-prod.mirror.co.uk/incoming/article29572956.ece/ALTERNATES/s1200c/0_RICHARD-SANDRAK-THE-9-YEAR-OLD-BODYBUILDER-LOS-ANGELES-AMERICA.jpg"
      }else {
        return ""
      }
    },
    getScore() {
      if (this.score < 50) {
        return "F";
      } else if (this.score >= 50 && this.score <= 60) {
        return "E";
      } else if (this.score > 60 && this.score <= 70) {
        return "D";
      } else if (this.score > 70 && this.score <= 80) {
        return "C";
      } else if (this.score > 80 && this.score <= 95) {
        return "B";
      } else {
        return "A";
      }
    },
    getScoreColor() {
      if (this.score < 50) {
        return "red";
      } else if (this.score >= 50 && this.score <= 60) {
        return "orange";
      } else if (this.score > 60 && this.score <= 70) {
        return "lime";
      } else if (this.score > 70 && this.score <= 80) {
        return "limegreen";
      } else if (this.score > 80 && this.score <= 95) {
        return "green";
      } else {
        return "blue";
      }
    },
  },
};
</script>

<style></style>
