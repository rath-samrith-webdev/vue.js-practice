<script>
import ButtonDetails from "@/components/Button.vue";
export default {
  name: "StudentProfile",
  components:{
    ButtonDetails,
  },
  props:['student']
}
</script>

<template>
  <div class="card p-2">
    <div class="card-image">
      <img class="img-thumbnail" width="250" v-bind:src="student.profile" v-bind:alt="student.name">
    </div>
    <div class="card-body">
      <p class="text-start">Student's name: <span>{{student.name}}</span></p>
      <p class="text-start">Date of Birth: <span>{{student.date_of_birth}}</span></p>
    </div>
    <ButtonDetails/>
  </div>
</template>

<style scoped>

</style>