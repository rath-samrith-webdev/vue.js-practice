<script>
export default {
  name: "StoreItems",
  props:['shoe']
}
</script>

<template>
  <div class="col-sm-2 p-2 d-flex">
    <div class="thumb-wrapper card">
      <div class="img-box">
        <img :src="shoe.image" class="img-fluid" alt="">
      </div>
      <div class="thumb-content p-2">
        <h5>{{shoe.name}}</h5>
        <p class="item-price"><strike>{{shoe.price}}</strike></p>
        <a href="#" class="btn btn-outline-primary">Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>