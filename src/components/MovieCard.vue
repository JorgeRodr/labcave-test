<template>
  <v-card>
    <div class="card">
      <template v-if="movie.poster_path">
        <img class="card__image" v-bind:src="url + movie.poster_path">
      </template>
      <template v-else>
        <span class="card__image-error">Image not available</span>
      </template>
      <div class="card__info">
        <h2>{{movie.title}}</h2>
        <MovieModal class :msg="movie.overview"/>
      </div>
    </div>
  </v-card>
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
  display: flex;
  height: 100%;
  &__info {
    display: inline-block;
    position: relative;
    width: 100%;
    .modal {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  &__image-error {
    height: 100%;
    position: absolute;
    top: 45%;
    margin-left: 10px;
  }
}

.v-card {
  height: 100%;
}
</style>
