<template>
  <div>
    <div class="text-xs-center">{{movie.title}}</div>
    <MovieModal :msg="movie.overview"/>
  </div>
</template>

<script>
import MovieModal from "./MovieModal";
export default {
  name: "MovieCard",
  components: {
    MovieModal
  },
  props: {
    movie: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
