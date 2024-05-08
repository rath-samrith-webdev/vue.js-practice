<template>
  <div class="container-lg">
    <div class="mt-2">
      <h5 class="text-bg-primary p-2">Top Fruit Trends</h5>
      <div class="d-flex justify-content-between gap-5">
        <div class="card p-3 text-start d-flex justify-content-sm-between" v-for="(fav,index) in fav_food" :key="index">
          <div class="d-flex justify-content-between align-items-center ">
            <div class="mt-2">
              <h5 class="text-uppercase">{{ fav.name }}</h5>
              <div class="mt-2 text-start">
                <h5 class="text-uppercase mb-0 bg-danger-subtle text-center">{{fav.price}} $</h5>
              </div>
            </div>
            <div class="image img-thumbnail">
              <img v-bind:src="fav.img" width="100">
            </div>
          </div>
          <p>A great option weather you are at office or at home. </p>
          <button class="btn btn-outline-danger">Add to cart</button>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <h5 class="text-bg-primary p-2">Top Trend Comics</h5>
      <div class="d-flex justify-content-between gap-5">
        <div class="card p-3 text-start d-flex justify-content-sm-between" v-for="(item,index) in book" :key="index">
          <div class="d-flex justify-content-between align-items-center ">
            <div class="mt-2">
              <h5 class="text-uppercase">{{ item.bookname }}</h5>
              <div class="mt-2 text-start">
                <h6 class="text-uppercase mb-0 bg-danger-subtle text-center">{{item.author}}</h6>
              </div>
            </div>
            <div class="image img-thumbnail">
              <img v-bind:src="item.img" width="100">
            </div>
          </div>
          <p>A great option weather you are at office or at home. </p>
          <button class="btn btn-outline-primary">Read</button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h5 class="bg-primary-subtle p-2">Students' table</h5>
      <table class="table table-responsive-md">
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
    </div>
  </div>
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
          img:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
          publish_date:"4/May/2024",
          author:"J. K. Rowling"
        },
        {
          bookname:"Death note",
          img:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421511788/death-note-vol-11-9781421511788_lg.jpg",
          publish_date:"4/May/2024",
          author:"Tsugumi Ohba"
        },
        {
          bookname:"Jujutsu Kaisen",
          img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe",
          publish_date:"4/May/2024",
          author:"GEGE Akutami"
        },
        {
          bookname:"Tensei Sura",
          img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAUAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xAA4EAACAQIEBAQEBAUEAwAAAAABAgMEEQAFEiEGEzFBUWFxoRQiMoEHI5HBQlKx0fAVM2LhJDRy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAJxEAAgIBAwQABwEAAAAAAAAAAAECEQMSITEEE0FRIkJhcYGh8BT/2gAMAwEAAhEDEQA/AKp5Rx6YmABOwOwv3wwU2WRzukYk5cjGwLj5R6nDpSozUcMOXUbtStECl0NiD43HX1xVLNGJJjwuXLKqMZAuSAB3xnLPXDznNHTR8N5nU1tPHTzU8kPwxEQWQXc6122I26EeHjiHlnwMnDjK9MklU0zfEszjmADZLX3AuDfYb7dMB/oXoLsP2KggdgSFJA62HTGJFdvmNh3t1w25m8MGXpBTqsUcgBcd7Gx9/wBsDKWamoDSVlRFzvzx+VsQVBuWt37gfr2xzzXHg6OF6iKiLEqs1KUjcEI7L1/viRlfDWYZlE1ZRNCsayWjLuQXI/lsDj2izGSpzWlqJqmQn4hWkAYj5NWpx5C1z5fbDfBWw0cNLHSoOXCGc3PVmvc379cLhNq2PeJMKUdfUR0uXxZiqrmFTsYx2tuT+nviXPVCOqhp7gGS+/cYXMrqpK7iVJpTsEfSOwFrfvjrmk7jMzrkKsD+UR2HUY1OxtUQPgweo2wwwZlO9JBE1QsfJXVJpUqWVTsoOruLdvHbxFVUcsaKDC41kaTa1/Ie2OlPEqxj4trgmxZU1kei98bkUZ8k8U4nSoy5uMqOoWokbL5I5VAWZWEcy79T0v0+YXttjSm4UouF6MPVUUOZVTsdcsjutPAp8DY6j03w50mW0eU0f5zyzMfzF1hlGwsQB1Xtse9sC81zZ1y6qgjj5dPLGRob6iTfoRt4Hv74m44HITanh6sqpTJTQRyQzy7SJUKUjSwuASRbe/UYG8T8O5jl6LX1s1BJTSS8uIUs4e2xOkDyHh++GjJpqeOin5qwDTIBpe3zb2O/hb+mE7ivMTmOezmIDkRNyoVXoR3P3P7YyEnNmtUCYiYmZozpJBHja+J8GcVKBY525sV9wQL/AOeuItfSz5dWy0lWmiWPRqHhqRWHswxw1YopUDbQ1QnktDVwyf8Ajyg6XXa3l4g+WJ+SUbZnWO7MUjjWx8RfoPXAzg+rianqqGo0A8xJYmcXANiD76T9sHRLTRZ2aTK5/wAligkZVsusDfT5XPtgVs6D5NqvNWnjZdwVbWPC3QC3qb43yqu5RpamNyHjZQdJ87b4X5ZdDljfR/U/3tjanJgjaVWN2cMvhtcf564b4oS3bsfc+4g01yUpaN2A1qAbdRsDfv54AZpVz1VI4UR6rXCXIsf8viOkxq0ecaDM51M0g2LdTfA6nzemfNGGaN8AtFGxnhYhjUhrACM997H9sBpiludbZpksPPgqqypMKa7xIHawBAuW97euA1IiS51ltQiF4amqTSjbXsV2PbrfDZlkFdmtdBDl1JqlVtSRIPlVLnYnsPPE2o/DnP6CnSCCCKQh2+HlSRdMRsCt799eq23Ze+Fx22GBvijg6HPvjc8FPOBU0kZ5CpplSWPUtwD4r69BscU7X5dVZZVNBWJoYjUu/UYu+PjespzyaykhmlVAJXjdkDNbchTe3pfFS8a1VfmnE0s1VGEWchKSNfpVdhpHnc4yD3ClTI3Das880i/Qq6CfO4wWrZViSmdEKGNy0ri9rHxsOnXfGkES0AWgYaGAuxKm7ttf/OmJyQ1EgjvGFQjYhrk9SOnjvjbMRIzLIa/K6iNqxByGuqkG4J3/AGxyrooqhFWlDqSu6tv83gMXfXcPU0kcawwxFI21RxSC6ofK4P6Wtj2Gnymjgjqaqho6GosQdMaq1+9tO5G2D1ApIoaOizajpHzCJGamhYJMWF0BOwBbx36dcE6HIaKei/1XNGlppq9wkcUkJYzIdl0Hz6D7eIOGTNqWgzHMjQt8RLlyT/EMFOgOfA33uehPXrgrnfEDLT8xaeCnggX5QG3RR/yI+UelvvjtTaBSDfDNZk1PEKPJsuko6pgWmp2j+aPTt8zXsfI33wxmphZSkx5d13EthcevTFV/hZxPU59nGZSrl0kdKIEEJO7O2o336dP07ncYfs+4bpOI8sakzzUIPqCQylSjDo2oWvbwIt5HAeQhb4r4Z+MzMVGUK7yz7yqo+VTb6jfx+3jhYzDgOrSqpKrNndGp5NcZi3S+xsT6geeHvhqqgyuGupHY1ceWy8tqsVHPmYaVa8g6g772v/UAvNn+TSU95ahHjYfSY2Nx6WxySOKkzKjo7x0uc0KGKRjy8wgkdZIibk/KSQf/AJ6W6dBhQzPMqiy0InDw08rKKiMlTMOgby28L++Lfziqos4h/wBPoqKCmgaUNzp4269L2HTYkd+uK04j4CzzKqmR48vqqmlU6hJAusBbna3X9Rjmjb2LfzbiiaUtDlg5aDrOwu1vIHp98DKbLayuvMS2k9Z5iST+5++JGQZX8dKZJADEhsqn+I+J8hf7nDfUSwUsKq2gG10W3v6f3wYDYqHh8RMqPWqGbZRyevvhE/EPgzPc2MRympSqoo/92mRtDub7kA7NYdBf064s1q5FP5aFrd2OI80/NRU5aIAf4cM7exN32hUyrPqqijgyTJIhTgzJCGeK/KPTSR6D2OHCXMIKSpOXRiqzHMQokeJb6RfoWJ+RB3t7YF5rTu0L1gFTzoIZNqdgJCrqFLJfbmAAWPcbHHHJausXiCLMaqgq6TL6mBKCIzsOY7g3V5B4n5lB8T54mnFxdFuJxyR1DDm9TT0UMmuHS8qFQyJu23S/b7+BxUea8bz8JZ/S081JBX0Dxlp4JUGoDUQDGexsOnQ++LJ4tLq9PI6hYtx17m2/t74qf8ScqqMzq8rjo6ctIRLrmOyqo09T+pxseLMZcPDuYcK8W5es+UCmYW+eJV5csZ8GA3/bDNSwrTwJChZlQWBY3NsfNXBGRVuUcTJJIbkwPyp4XI0MLddr79MXlw/xE8rx0mYfWxskvifBvPwP+EuTDzh6Zly6AU9urq566fmJv7j9caVzlp2BYtY7sx3JxU34f8R1OV1woGZpaSpcmw2aN7fUP0tbvtiz2cTIJKaojkbqwPX7jqPXDcbiS5lP8G2MxxeVkX50cf8AJBqHtv7Y9maUIogW7sep6L5nDiUkRS6Zlh1f7nVP5h3wYkihqaWlnrG2gKz31WXUB1PiN7+tsI+f582T00y5XB8dm5X8qFSL6vHzI3OgXO3TCatTxPNS5fLnee5msiQS1hhjjh5SCDqrjUtyLrcEd/LE+bd7FvTJpWx44mD5pepMjNHHe0JH0r6ePj/0cCKWrpaiSmy6qqEhmmkEQBaxKnYn9D37jE2fNcprJDRzZhFHKkhW24AZSw6kW/hPU/e/Vdr8ooawpW0NceUrOQ5gUgaFMj3JAYAKtxt3++ERvyUMmcsZbmMyiRWaIOpBO6kG1u1zt74IQVSyFtUkJRQSWR9lsbb+o3vjlUSU8yjMKlZsvgl08uGpkRpGVgWUgISw6MbHwPYHADi6tpYsuMdHUiRefyJW0DQbIsg0kfUDrBv5emDSryYQaT4bLeIKSn5LpIsln5gIK3Gw377jB/Ni0yQ1KkqgYqgBsfX2wi5pUTS5rVTyG8xncsST9QNv29sPupKjh+BlN2MYYbWNwN/3GAewSAmd8R5plOVSTUldKJFKqgc6wLkDob+eAGWcb8RZxnOWZfW5gRTT1kUUqwoIi6s4BGpbEbHsRjfjP5MmAI+Z5lv742/DLIYaqWTPKkM60UwWniXvKBq1H0uth3Ppu7EpTaihGdwxxc2uCxxkNGtJBFSJT09P8SJp4Xp+bziVF92e69PqB7nbHuacPcwyR0c9PFTcmaBIXoyViSQWlUFZVJ1cq42uD33xEzGrnfIxnWX5jPA4gWNaaecJDdiNLkXA1AG1r99t+pvLZKkTVarLUSmGQqrCQzIIbmx6kM4IINyWANza9sUyjDXpohhPKsPcU+PoC5eHJdTIK2hYMeayGgdxcsWt/wCxY7yk+FjbHeLIvhMnFDFWIjU0j8p2p3kFmDIw0tMbjZtibWP3xJzQS/AVscVZUxtUozieOWxSwAHLt9I1A/L64mSVDBWmEkrMW5ATUdOkblrfzb9euCWBN1pAl1c0rc/1/ewUvC+VxI8MIqFkayLIaqUtGYtaDS2u6LZ2GkdmI32wrcdZdDRZHQpCq62nHMaIaUYiJVBCBmCDSqiwPbfDykjcnVzqphSqOXrlJaW+2pz3PQ/9YU/xRqCIcthZ2eUl5ANHLsLAW0+p+r1wGXEoQbqg+n6iWTIo6rX2EakiFZmkMczsRLINRbcne5+5w3Us7rWxxMdFPzbkEEaTcHp2BtjzGYiZ6sQbxxlz1dJULTITy5NaDxI+oe+Frgzi5+HBUU08DVFBUfM8atpdGtbUp9NiPIdLYzGYKEnF2gckIzWmXDJ+c8dRzJRUuU0L09FTzxzSCVg7SaG1KtugXvbvt0tgg3Hk+Q1Qp6fL4pKB1E8ZWdxIzMANXMbVe4A6jt1ve+YzDO5Jy1XuLjhxqGitjan/ABXqEZmnypCUJ+HEU2nSp7MSDq3ubi3U7DbHCo/FXMZKeWOHLqeCRkJjkSRrxSkEM426biw7WG53vmMxryz9gLpsK+UY+EOK6mryBWzQLUzsrq0zPYsFJKg+BG2/gALeIfiriCpzpIaaWj+GMN2u8mtySLDew+X7f0xmMwvuzfwt7DOxji9aW5//2Q==",
          publish_date:"4/May/2024",
          author:"FUSE"
        }
      ],
      fav_food:[
        {
          name:"Apple",
          img:"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
          person:"Soching",
          price:1.5,
          msg:"I enjoy them a lot..!!!"
        },
        {
          name:"Orange",
          img:"https://media.istockphoto.com/id/172411313/photo/juicy-orange-refreshment.jpg?s=2048x2048&w=is&k=20&c=23SYh-BFuy840s_rmmmqfd7fF4xNMeX-hP5ejVsUT9M=",
          person: "Veak",
          price: 1.99,
          msg: "It is my most favorite!!!"
        },
        {
          name: "Beer",
          img:"https://thumbs.dreamstime.com/b/bottles-famous-global-beer-brands-poznan-pol-mar-including-heineken-becks-bud-miller-corona-stella-artois-san-miguel-143170558.jpg",
          person:"Chanthou",
          price: 5,
          msg:"I love it...!!!!!"
        },
        {
          name: "Wood Apple",
          img: "https://cdn.pixabay.com/photo/2022/01/19/15/54/wood-apple-6950281_1280.jpg",
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