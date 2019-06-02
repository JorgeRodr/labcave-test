export const mutations = {
  UPDATE_MOVIES(state, payload) {
    state.movies = payload.movies;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};
