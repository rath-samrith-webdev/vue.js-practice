<template>
  <div class="container mt-4">
    <h1 class="mb-4">Product List</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Color</th>
          <th scope="col">Capacity</th>
          <th scope="col">Price</th>
          <th scope="col">Generation</th>
          <th scope="col">Screen Size</th>
          <th scope="col">Year</th>
          <th scope="col">CPU Model</th>
          <th scope="col">Hard Disk Size</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="products in productList" :key="products.id">
          <td>{{ products.id }}</td>
          <td>{{ products.name }}</td>
          <td>
            {{
              products.data && products.data.color ? products.data.color : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.capacity
                ? products.data.capacity
                : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.price ? products.data.price : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.generation
                ? products.data.generation
                : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.screensize
                ? products.data.screensize
                : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.year ? products.data.year : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.CPU % model
                ? products.data.CPU % model
                : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.hardisk
                ? products.data.hardisk
                : "N/A"
            }}
          </td>
          <td>
            {{
              products.data && products.data.description
                ? products.data.description
                : "N/A"
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ApiList",
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://api.restful-api.dev/objects");
        console.log(response.data);
        if (response.status) {
          this.productList = response.data;
        } else {
          console.log("Failed to fetch data");
        }
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style></style>
