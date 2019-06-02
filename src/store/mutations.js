export const mutations = {
  UPDATE_MOVIES: function(state, payload) {
    state.movies = payload.movies;
  },
  SET_ERROR: function(state, payload) {
    state.error = payload;
  },
  SET_LOADING: function(state, payload) {
    state.loading = payload;
  }
};
