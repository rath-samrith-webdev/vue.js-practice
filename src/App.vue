<template>
  <div class="container-sm">
    <ProfileComponent :user="user" @showmore="showMore" />
    <button @click="close" class="btn btn-danger">Close</button>
    <ProfileTable v-show="show" :information="information" @close="close" />
  </div>
</template>
<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
import ProfileTable from "@/components/ProfileTable.vue";
export default {
  name: "App",
  data() {
    return {
      show: false,
      user: {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDcTtqtraPzxBSoCLV8CPMKK4Z5Zn-m64oovU_Ss9bL2dv6fcI",
        name: "Jame",
        age: 19,
        gender: "Male",
      },
      information: "",
    };
  },
  components: { ProfileTable, ProfileComponent },
  methods: {
    showMore(information) {
      this.show = true;
      this.information = information;
    },
    close(information) {
      this.show = false;
      this.information = information;
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
  margin-top: 60px;
}
</style>
