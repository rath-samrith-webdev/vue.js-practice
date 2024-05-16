<script>
import ProductDetail from "@/components/ProductDetail.vue";
export default {
  name: "HomePage",
  components: {
    ProductDetail,
  },
  data(){
    return{
        products:[
          {
            id:1,
            name: "Product Name",
            price:200,
            description:"The best product description",
          }
        ]
    }
  }
}
</script>

<template>
<div class="container-fluid d-flex justify-content-around p-2">
  <ProductDetail v-for="product in products" :key="product.id" :product="product" />
</div>
</template>

<style scoped>

</style>