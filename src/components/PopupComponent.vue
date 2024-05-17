<script>
export default {
  name: "PopupComponent",
  emits:['close']
}
</script>

<template>
  <div class="popup">
    <h5>This is the pop up</h5>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<style scoped>

</style>