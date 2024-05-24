<script>
export default {
  name: "PostPage",
  data(){
    return{
      posts:[]
    }
  },
  mounted() {
    fetch('http://localhost:8000/api/v1/posts/')
    .then(res => res.json())
        .then(data=>this.posts = data.data)
        .catch(err => console.log(err));
  }
}
</script>

<template>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Recipient:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
  <table v-if="posts.length!==0" class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>Poster</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>{{ post.poster }}</td>
      </tr>
    </tbody>
  </table>
  <h2 v-else class="text-center text-danger">No Post at the moment</h2>
</template>

<style scoped>

</style>