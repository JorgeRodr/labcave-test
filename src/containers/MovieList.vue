<template>
  <v-app>
    <div class="text-xs-center">
      <div v-for="movie in movies" v-bind:key="movie.id">
        <MovieCard :movie="movie"/>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "../components/MovieCard";
export default {
  name: "MovieList",
  components: {
    MovieCard
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
