<template>
  <div class="container d-flex justify-content-center align-content-center flex-column">
    <h1 class="text-center">Exercise 6</h1>
    <!-- <h1 class="text-info">Input Information</h1> -->
    <div class="d-flex flex-column">
      <div class=" d-flex mt-2 gap-5 mb-2 justify-content-center">
        <form action="" class=" card p-3 d-flex justify-content-center flex-column" style="width: 50%;">
          <h1 class="text-warning">Form input</h1>
          <div class="form-group-sm">
            <label for="firstname">Your Name</label>
            <input type="text" class="form-control" id="firstname" v-model="name">
          </div>
          <div class="form-group-sm">
            <label for="firstname">Your email</label>
            <input type="text" class="form-control" v-model="email">
          </div>
          <div class="form-group-sm">
            <label for="firstname">Your job</label>
            <input type="text" class="form-control" v-model="job">
          </div>
          <div class="form-group-sm mt-2">
            <div class="db mb-2">
              <label for="firstname">Date of birth</label>
            </div>
            <input type="date" id="dob" v-model="dateOfBirth" @change="calculateAge">
            <p>Name: {{ name }}</p>
            <p>Email: {{ email }}</p>
            <p>Your job: {{ job }}</p>
            <p v-if="age !== null">Age: {{ age }}</p>
            <p v-if="age !== null && age < 18" :style="{ color: 'red' }">Status: Child</p>
            <p v-else-if="age !== null && age >= 18" :style="{ color: 'blue' }">Status: Adult</p>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Exercise_6",
  data() {
    return {
      name: "",
      email: "",
      job: '',
      age: "",
      // dateofbirthday: "",
    }
  },
  method: {
    calculateAge() {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    },
  }
}
</script>

<style></style>