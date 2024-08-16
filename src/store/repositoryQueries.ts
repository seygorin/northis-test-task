import { gql } from "@apollo/client";

const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            primaryLanguage {
              name
            }
            languages(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
            repositoryTopics(first: 5) {
              edges {
                node {
                  topic {
                    name
                  }
                }
              }
            }
            forkCount
            stargazerCount
            updatedAt
            licenseInfo {
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      repositoryCount
    }
  }
`;

export default SEARCH_REPOSITORIES;
