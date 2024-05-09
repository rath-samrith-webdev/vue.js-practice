
<template>
  <div class="col-md-4">
    <div class="card mb-3">
      <img
          :src="sponsor.logoUrl"
          :alt="sponsor.name"
          class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ sponsor.name }}</h5>
        <p class="card-text">{{ sponsor.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorComponent",
  props:['sponsor'],
}

</script>

<style scoped>

</style>