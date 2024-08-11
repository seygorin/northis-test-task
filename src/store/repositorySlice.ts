import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { gql } from "@apollo/client";
import client from "@service/githubApi";

import {
  Repository,
  SearchRepositoriesData,
  SortField,
  SortDirection,
} from "@type/Repository";

export interface RepositoryState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  sortField: SortField;
  sortDirection: SortDirection;
}

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  sortField: "STARS",
  sortDirection: "DESC",
};

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

export const searchRepositories = createAsyncThunk(
  "repositories/search",
  async ({
    query,
    page,
    sortField,
    sortDirection,
  }: {
    query: string;
    page: number;
    sortField: SortField;
    sortDirection: SortDirection;
  }) => {
    const sortQuery = `${query} sort:${sortField.toLowerCase()}-${sortDirection.toLowerCase()}`;
    const result = await client.query<SearchRepositoriesData>({
      query: SEARCH_REPOSITORIES,
      variables: {
        query: sortQuery,
        first: 10,
        after: page > 1 ? btoa(`cursor:${(page - 1) * 10}`) : null,
      },
    });

    return result.data.search;
  },
);

const repositorySlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => ({
      ...state,
      currentPage: action.payload,
    }),
    setSortField: (state, action: PayloadAction<SortField>) => ({
      ...state,
      sortField: action.payload,
    }),
    setSortDirection: (state, action: PayloadAction<SortDirection>) => ({
      ...state,
      sortDirection: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRepositories.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(searchRepositories.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        repositories: action.payload.edges.map((edge) => edge.node),
        totalPages: Math.ceil(action.payload.repositoryCount / 10),
      }))
      .addCase(searchRepositories.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message || "An error occurred",
      }));
  },
});

export const { setPage, setSortField, setSortDirection } =
  repositorySlice.actions;
export default repositorySlice.reducer;
