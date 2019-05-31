import gql from "graphql-tag";

export const QUERY = gql`
  query StarWars {
    movies(query: "The Lord of the Rings") {
      id,
      title,
      overview,
      poster_path
    }
  }
`;

export const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($url: String!) {
    createLink(url: $url) {
      id
      createdAt
      url
    }
  }
`;