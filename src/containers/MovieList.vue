<template>
  <v-app>
    <div class="list">
      <Header @submitted="log"/>
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
  grid-template-areas:
    "h h h h"
    ". . . .";
  grid-gap: 1%;
}
</style>
