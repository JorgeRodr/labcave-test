<template>
  <v-app>
    <div class="list">
      <Header @submitted="log"/>
      <template v-if="movies && movies.length === 0">
        <span class="list__warn">No data for this search</span>
      </template>
      <template v-for="movie in movies">
        <MovieCard :movie="movie" v-bind:key="movie.id"/>
      </template>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
export default {
  name: "MovieList",
  components: {
    MovieCard,
    Header
  },
  created: function() {
    // this.fetchMovies();
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["movies"])
  },
  props: {
    msg: String
  },
  methods: {
    ...mapActions(["fetchMovies"]),
    log: function(e) {
      this.fetchMovies(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "h h h h"
      ". w w ."
      ". . . .";
  }
  @media screen and (min-width: 650px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "h h"
      "w w"
      ". .";
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "h"
      "w"
      ".";
    // grid-gap: 35px;
  }
  grid-gap: 1%;
  &__warn {
    font-size: 24px;
    grid-area: w;
  }
}
</style>
