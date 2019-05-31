import { apolloClient } from '../graphql/apollo';
import { QUERY } from '../graphql/queries';

export const actions = {
    async fetchMovies({commit}) {
        const res = await apolloClient.query({
            query: QUERY
        });
        
        commit('UPDATE_MOVIES', res.data);
    }
};
