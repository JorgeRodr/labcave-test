import { apolloClient } from "../graphql/apollo";
import { MOVIES_QUERY } from "../graphql/queries";

export const actions = {
  async fetchMovies({ commit }, searchValue) {
    commit("SET_LOADING", true);
    commit("UPDATE_MOVIES", { movies: null });
    try {
      const res = await apolloClient.query({
        query: MOVIES_QUERY,
        variables: {
          query: searchValue
        }
      });
      commit("SET_ERROR", false);
      commit("UPDATE_MOVIES", res.data);
    } catch (e) {
      commit("SET_ERROR", e);
    }
    commit("SET_LOADING", false);
  }
};
