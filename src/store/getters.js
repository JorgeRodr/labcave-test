export const getters = {
  movies: function(state) {
    return state.movies;
  },
  error: function(state) {
    return state.error;
  },
  loading: function(state) {
    return state.loading;
  }
};
