<template>
  <v-app>
    <div class="list">
      <Header @submitted="search"/>
      <template v-if="!loading">
        <template v-if="movies && movies.length === 0">
          <div class="list__warn">
            <v-alert :value="true" color="info" outline>No data for this search</v-alert>
          </div>
        </template>
        <template v-for="movie in movies">
          <div class="list__card" v-bind:key="movie.id">
            <MovieCard :movie="movie"/>
          </div>
        </template>
        <template v-if="error">
          <div class="list__error">
            <v-alert :value="true" color="error" outline>There was an error</v-alert>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="list__loader">
          <v-progress-circular :size="70" color="primary" indeterminate></v-progress-circular>
        </div>
      </template>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieCard from '../components/MovieCard.vue';
import Header from '../components/Header.vue';

export default {
  name: 'MovieList',
  components: {
    MovieCard,
    Header,
  },
  computed: {
    ...mapGetters(['movies', 'error', 'loading']),
  },
  methods: {
    ...mapActions(['fetchMovies']),
    search(e) {
      this.fetchMovies(e);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/sass/_utils.scss";

.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (min-width: 1260px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "h h h h"
      ". w w ."
      ". e e ."
      ". l l ."
      ". . . .";
  }

  @media screen and (min-width: 1024px) and (max-width: 1260px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "h h h"
      "w w w"
      "e e e"
      "l l l"
      ". . .";
  }

  @media screen and (min-width: 650px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "h h"
      "w w"
      "e e"
      "l l"
      ". .";
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "h"
      "w"
      "e"
      "l"
      ".";
    // grid-gap: 35px;
  }
  grid-gap: 1%;
  &__warn {
    font-size: 24px;
    grid-area: w;
  }

  &__error {
    font-size: 24px;
    grid-area: e;
  }

  &__loader {
    grid-area: l;
  }

  &__card {
    @include fade_animation;
  }
}
</style>
