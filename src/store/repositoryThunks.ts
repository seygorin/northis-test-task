import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "@service/githubApi";
import {
  SearchRepositoriesData,
  SortField,
  SortDirection,
} from "@type/Repository";
import SEARCH_REPOSITORIES from "./repositoryQueries";

const ITEM_PER_PAGE = 10;

const searchRepositories = createAsyncThunk(
  "repositories/search",
  async ({
    query,
    page,
    sortField,
    sortDirection,
    itemsPerPage = ITEM_PER_PAGE,
  }: {
    query: string;
    page: number;
    sortField: SortField;
    sortDirection: SortDirection;
    itemsPerPage: number;
  }) => {
    let sortQuery = `${query} `;
    if (sortField === "NAME") {
      sortQuery += `sort:name-${sortDirection.toLowerCase()}`;
    } else {
      sortQuery += `sort:${sortField.toLowerCase()}-${sortDirection.toLowerCase()}`;
    }

    const result = await client.query<SearchRepositoriesData>({
      query: SEARCH_REPOSITORIES,
      variables: {
        query: sortQuery,
        first: itemsPerPage,
        after: page > 1 ? btoa(`cursor:${(page - 1) * itemsPerPage}`) : null,
      },
    });

    return result.data.search;
  },
);

export default searchRepositories;
