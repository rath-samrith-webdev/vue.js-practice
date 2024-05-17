<script>
import PopupComponent from "@/components/PopupComponent.vue";
export default {
  name: "PopupPage",
  components: {
    PopupComponent
  },
  data(){
    return {
      showPopup:false
    }
  },
  methods:{
    closePopup(){
      this.showPopup=false
    }
  }
}
</script>

<template>
  <div class="container-md">
    <button @click="showPopup=true">Show Popup</button>
    <PopupComponent v-show="showPopup" @close="closePopup"/>
  </div>
</template>

<style scoped>

</style>