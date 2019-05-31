<template>
  <div class="card">
    <v-card>
      <template v-if="movie.poster_path">
        <img class="card__image" v-bind:src="url + movie.poster_path">
      </template>
      <template v-else>
        <span class="card__image-error">Image not available</span>
      </template>
      <h2 class="card__title">{{movie.title}}</h2>
      <MovieModal :msg="movie.overview"/>
    </v-card>
  </div>
</template>

<script>
import MovieModal from "./MovieModal";
import { CONSTANTS } from "../constants.js";
export default {
  name: "MovieCard",
  components: {
    MovieModal
  },
  data() {
    return {
      url: CONSTANTS.IMG_BASE_URL
    };
  },
  props: {
    movie: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card {
    // grid-area: c;
  }
</style>
