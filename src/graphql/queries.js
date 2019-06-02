import gql from "graphql-tag";

export const MOVIES_QUERY = gql`
  query Movies($query: String!) {
    movies(query: $query) {
      id,
      title,
      overview,
      poster_path
    }
  }
`;
