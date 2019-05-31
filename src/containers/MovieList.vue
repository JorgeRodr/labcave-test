<template>
  <v-app>
    <div class="list">
      <Header />
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
    this.fetchMovies();
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
    ...mapActions(["fetchMovies"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
