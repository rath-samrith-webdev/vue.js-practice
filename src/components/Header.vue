<script>
export default {
  name: "HeaderComponent",
  data(){
    return {
      topItem:[
        {
          name:"Adidas",
          img:"https://cdna.artstation.com/p/assets/images/images/047/520/028/large/rahul-chandra-nike-show.jpg?1647799767"
        },
        {
          name:"Adidas",
          img:"https://cdna.artstation.com/p/assets/images/images/047/520/028/large/rahul-chandra-nike-show.jpg?1647799767"
        },
        {
          name:"Adidas",
          img:"https://cdna.artstation.com/p/assets/images/images/047/520/028/large/rahul-chandra-nike-show.jpg?1647799767"
        }
      ]
    }
  }
}
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide h-50" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://cdn.dribbble.com/userupload/10129131/file/original-a2ed03731aee8974601680280ac38145.png?resize=1200x675" class="d-block w-100 h-50" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d5d26b33772242.56b79d5825657.jpg" class="d-block w-100 h-50" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://cdna.artstation.com/p/assets/images/images/036/002/188/large/m-n-vinit-img-20210322-204116-186.jpg?1616482578" class="d-block w-100 h-50" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
</style>