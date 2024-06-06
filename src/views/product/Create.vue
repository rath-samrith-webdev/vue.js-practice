<template>
  <div class="container mt-4">
    <h1 class="mb-4">Create Product</h1>
    <Form @submit="createProduct" :validation-schema="productSchem">
      <div class="mb-3">
        <label for="product-name" class="form-label">Name</label>
        <Field
          name="name"
          class="form-control"
          id="product-name"
          rules="required"
          v-model="product.name"
        />
        <ErrorMessage name="name" class="text-danger" />
      </div>
      <div class="mb-3">
        <label for="product-category" class="form-label">Category</label>
        <Field
          name="category"
          v-model="product.category_id"
          class="form-control"
          as="select"
        >
          <option value="" disabled>Select a category</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </Field>
        <ErrorMessage name="category" class="text-danger" />
      </div>
      <div class="mb-3">
        <label for="product-description" class="form-label">Description</label>
        <Field
          name="description"
          rules="required"
          class="form-control"
          v-model="product.description"
          as="textarea"
        />
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <button type="submit" class="btn btn-primary">Create Product</button>
    </Form>
  </div>
</template>
<script>
import axios from "axios";
import { Field, Form, ErrorMessage } from "vee-validate";
import { productSchema } from "@/validation/validation";
export default {
  name: "create-product",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      product: {
        name: "",
        category_id: "",
        description: "",
      },
      categories: [],
      productSchem: productSchema,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/category/list"
        );
        if (response.data.success) {
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async createProduct() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/product/create",
          this.product
        );
        if (response.data.success) {
          this.$router.push({ name: "products" });
        }
      } catch (error) {
        console.error("Error creating product:", error);
      }
    },
  },
};
</script>
