<template>
  <div class="container-md d-flex justify-content-around">
    <div class="card"  v-for="(fav,index) in fav_food" :key="index">
      <div class="card-header">
        <h5>{{fav.name}} | {{fav.price}}</h5>
      </div>
      <div class="card-body text-start">
        <h6>Food Name: {{fav.name}}</h6>
        <p>The person who love the food: {{fav.person}}</p>
        <p>Price: {{fav.price}} dollar(s)</p>
      </div>
      <div class="card-footer text-start">
        <p>{{fav.msg}}</p>
      </div>
    </div>
  </div>
  <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Publish Date</th>
      <th scope="col">Author</th>
    </tr>
    </thead>
    <tbody>
    <tr  v-for="(item,index) in book" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{item.bookname}}</td>
      <td>{{item.publish_date}}</td>
      <td>{{item.author}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      age: "",
      date_of_birth: "",
      color:'',
      book:[
        {
          bookname:"Harry Potter",
          publish_date:"4/May/2024",
          author:"J. K. Rowling"
        },
        {
          bookname:"Death note",
          publish_date:"4/May/2024",
          author:"Tsugumi Ohba"
        },
        {
          bookname:"Jujutsu Kaisen",
          publish_date:"4/May/2024",
          author:"GEGE"
        },
        {
          bookname:"Tensei Sura",
          publish_date:"4/May/2024",
          author:"FUSE"
        }
      ],
      fav_food:[
        {
          name:"Apple",
          person:"Soching",
          price:1.5,
          msg:"I enjoy them a lot..!!!"
        },
        {
          name:"Orange",
          person: "Veak",
          price: 1.99,
          msg: "It is my most favorite!!!"
        },
        {
          name: "Beer",
          person:"Chanthou",
          price: 5,
          msg:"I love it...!!!!!"
        },
        {
          name: "Wood Apple",
          price: 23,
          person:"John",
          msg:"I love it...!!!!!"
        }
      ]
    };
  },
  computed: {
    getFullName() {
      return this.first_name + " " + this.last_name;
    },
    getStatus() {
      if (!this.age) {
        return "";
      } else if (this.age >= 18) {
        return "Adult";
      } else {
        return "Child";
      }
    },
    color_status(){
      if (!this.age) {
        return "";
      } else if (this.age >= 18) {
        return "bg-primary";
      } else {
        return "bg-danger";
      }
    }
  },
};
</script>

<style>
h1 {
  color: red;
}

div {
  text-align: center;
}
</style>