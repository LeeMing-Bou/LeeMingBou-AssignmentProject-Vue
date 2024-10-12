<template>
  <!-- Condition Dummy Data -->
  <div v-if="hasImage == 'True'" class="card control" style="width: 18rem">
    <div class="blog-img">
      <img :src="img" class="img-fluid" alt="image" />
      <a href="/">Dec 06, 2021</a>
    </div>
    <div class="card-body">
      <h5 class="book-title">{{ title }}</h5>
      <div>
        <a :href="link">Continue Reading -</a>
      </div>
    </div>
  </div>

  <!-- Condition For Calling APIs -->
  <div v-if="hasImage !== 'True'" class="card control" style="width: 18rem">
    <div class="blog-img">
      <img src="../assets/default.jpg" class="img-fluid book-image-fromAPI" alt="image" />
      <!-- <img :src="profile_image" class="img-fluid book-image-fromAPI" alt="image" /> -->
      <a href="/">Dec 06, 2021</a>
    </div>
    <div class="card-body">
      <h5 class="book-title-fromAPI">{{ title }}</h5>
      <div>
        <a href="/">Continue Reading -</a>
      </div>
    </div>
  </div>
  


</template>

<script>
export default {
  //get value from other components
  props: ["link", "title", "img", "status", "hasImage", "profile_image"],
};
</script>

<style scoped>
/* .item {
  display: block;
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 5px;
} */
.control {
  display: inline-block;
  text-align: center;
  margin: 50px;
}

.book-image {
  /* height: auto; */
  height: auto;
  display: block;
  margin: 0 auto;
}

.book-title {
  display: block;
  margin-top: 10px;
  color: brown;
  font-size: 2rem;
  text-transform: capitalize;
}

.book-image-fromAPI {
  /* height: auto; */
  height: 200px;
  width: 400px;
  display: block;
  margin: 0 auto;
}
.book-title-fromAPI{
  display: block;
  margin-top: 10px;
  color: brown;
  font-size: 1.5rem;
  text-transform: capitalize;
  width: 300px;
  height: 200px;
  text-wrap: wrap;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}

</style>

