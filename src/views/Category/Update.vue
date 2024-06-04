<template>
  <div class="container mt-4">
    <h1 class="mb-4">Edit Category</h1>
    <Form @submit="updateCategory" v-slot="{ errors }">
      <div class="mb-3">
        <label for="category-name" class="form-label">Name</label>
        <Field
          name="name"
          id="category-name"
          class="form-control"
          rules="required|min:4"
          v-model="category.name"
          validateOnInput
          :style="{ borderColor: errors && errors['name'] ? 'red' : '' }"
        />
        <ErrorMessage name="name" class="text-danger" />
      </div>
      <div class="mb-3">
        <label for="category-description" class="form-label">Description</label>
        <Field
          as="textarea"
          name="description"
          id="category-description"
          class="form-control"
          rules="required|min:10"
          v-model="category.description"
          validateOnInput
          :style="{ borderColor: errors && errors['description'] ? 'red' : '' }"
        />
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <button type="submit" class="btn btn-primary">Update Category</button>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
import { Form, Field, defineRule, ErrorMessage } from "vee-validate";
// import { required,min } from "@vee-validate/rules";
defineRule("required", (value) => {
  {
    if (!value || !value.length) {
      return "This field is required";
    }
    return true;
  }
});
defineRule("min", (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters long`;
  }
  return true;
});

export default {
  name: "edit-category",
  props: ["id"],
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      category: {
        name: "",
        description: "",
      },
    };
  },
  mounted() {
    this.fetchCategoryDetails();
  },
  methods: {
    async fetchCategoryDetails() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/category/show/${this.id}`
        );
        if (response.data.success) {
          this.category = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    },
    async updateCategory() {
      try {
        const response = await axios.put(
          `http://127.0.0.1:8000/api/category/update/${this.id}`,
          this.category
        );
        if (response.data.success) {
          this.$router.push("/categories");
        }
      } catch (error) {
        console.error("Error updating category:", error);
      }
    },
  },
};
</script>
