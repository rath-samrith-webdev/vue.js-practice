<template>
  <div class="container">
    <!-- Add User Form -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form @submit.prevent="addUser" class="mb-3">
          <div class="input-group">
            <input type="text" v-model="newUser.name" class="form-control" placeholder="Name">
            <input type="email" v-model="newUser.email" class="form-control" placeholder="Email">
            <button type="submit" class="btn btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>

    <!-- User List -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <ul class="list-group">
          <li class="list-group-item" v-for="(user,index) in users" :key="index">
            <div v-show="!user.editMode">
              <span>{{user.name}}</span> - <span>{{user.email}}</span>
              <button  class="btn btn-danger btn-sm float-end" @click="removeUser(index)">Remove</button>
              <button  class="btn btn-primary btn-sm float-end me-2" @click="toggleEditMode(user)">Edit</button>
            </div>
            <div>
              <div class="input-group" v-show="user.editMode">
                <input type="text" class="form-control" v-model="user.name" placeholder="Name">
                <input type="email" class="form-control" v-model="user.email" placeholder="Email">
                <button  class="btn btn-success btn-sm" @click="saveUserEdit(user)">Save</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'Alice', email: 'alice@example.com', editMode: false },
        { name: 'Bob', email: 'bob@example.com', editMode: false },
        { name: 'Charlie', email: 'charlie@example.com', editMode: false }
      ],
      newUser: { name: '', email: '' }
    };
  },
  methods: {
    addUser() {
      if (this.newUser.name && this.newUser.email) {
        this.users.push({ ...this.newUser, editMode: false });
        this.newUser = { name: '', email: '' };
      }
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
    toggleEditMode(user) {
      user.editMode = !user.editMode;
    },
    saveUserEdit(user) {
      user.editMode = false;
    }
  }
};
</script>

<style>

</style>
