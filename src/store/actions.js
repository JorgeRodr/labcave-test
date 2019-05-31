import { apolloClient } from "../graphql/apollo";
import { MOVIES_QUERY } from "../graphql/queries";

export const actions = {
  async fetchMovies({ commit }, searchValue) {
    const res = await apolloClient.query({
      query: MOVIES_QUERY,
      variables: {
        query: searchValue
      }
    });

    commit("UPDATE_MOVIES", res.data);
  }
};
