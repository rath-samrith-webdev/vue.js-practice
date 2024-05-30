<template>
    <div class="container mt-4">
      <h1 class="mb-4">Create Category</h1>
      <Form @submit="createCategory" v-slot="{ errors }">
        <div class="mb-3">
          <label for="category-name" class="form-label">Name</label>
          <Field
              name="name"
              id="category-name"
              class="form-control"
              v-model="category.name"
              rules="required|minLength:3"
              validateOnInput
              :style="{ borderColor: errors && errors['name'] ? 'red' : '' }"
          />
          <error-message name="name" class="text-danger" />
        </div>
        <div class="mb-3">
          <label for="category-description" class="form-label">Description</label>
          <Field
              as="textarea"
              name="description"
              id="category-description"
              class="form-control"
              v-model="category.description"
              rules="required|minLength:3"
              validateOnInput
              :style="{ borderColor: errors && errors['description'] ? 'red' : '' }"
          />
          <error-message name="description"  class="text-danger"/>
        </div>
        <button type="submit" class="btn btn-primary">Create Category</button>
      </Form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import {Form, Field, defineRule, ErrorMessage} from "vee-validate";
  defineRule('required', value => {
    if (!value || !value.length) {
      return 'This field is required';
    }
    return true;
  });
  defineRule('minLength', (value,[limit]) => {
    if (!value || !value.length) {
      return true;
    }
    if(value.length < limit) {
      return `This field is required at least ${limit}`;
    }
    return true;
  });
  export default {
    name:'create-category',
    components: {
      ErrorMessage,
      Form,
      Field
    },
    data() {
      return {
        category: {
          name: '',
          description: '',
        },
      };
    },
    methods: {
      async createCategory(value) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/category/create', value);
          if (response.data.success) {
            this.$router.push('/categories');
          }
        } catch (error) {
          console.error('Error creating category:', error);
        }
      },
    },
  };
  </script>
  