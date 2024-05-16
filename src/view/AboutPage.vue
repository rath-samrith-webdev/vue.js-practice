<script>
import UserDetail from "@/components/UserDetail.vue";
export default {
  name: "AboutPage",
  components: {
    UserDetail,
  },
  data(){
    return{
      users:[
        {
          id:1,
          name:"John Doe",
          age:35,
          address:"London"
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container-fluid d-flex gap-2">
    <user-detail v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<style scoped>

</style>