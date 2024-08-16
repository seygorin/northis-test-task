import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository, SortField, SortDirection } from "@type/Repository";
import { initialState, RepositoryState } from "./repositoryTypes";
import searchRepositories from "./repositoryThunks";

const MAX_ITEMS = 1000;

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
    setItemsPerPage: (state, action: PayloadAction<number>) => ({
      ...state,
      itemsPerPage: action.payload,
    }),
    setCurrentQuery: (state, action: PayloadAction<string>) => ({
      ...state,
      currentQuery: action.payload,
    }),
    setSelectedRepository: (
      state,
      action: PayloadAction<Repository | null>,
    ) => ({
      ...state,
      selectedRepository: action.payload,
    }),
    setSearchQuery: (state, action: PayloadAction<string>) => ({
      ...state,
      searchQuery: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        searchRepositories.pending,
        (state): RepositoryState => ({
          ...state,
          loading: true,
          error: null,
        }),
      )
      .addCase(
        searchRepositories.fulfilled,
        (state, action): RepositoryState => {
          const totalCount = action.payload.repositoryCount;
          const effectiveTotalCount = Math.min(totalCount, MAX_ITEMS);
          return {
            ...state,
            loading: false,
            repositories: action.payload.edges.map((edge) => edge.node),
            totalPages: Math.ceil(effectiveTotalCount / state.itemsPerPage),
            totalCount: effectiveTotalCount,
          };
        },
      )
      .addCase(
        searchRepositories.rejected,
        (state, action): RepositoryState => ({
          ...state,
          loading: false,
          error: action.error.message || "An error occurred",
        }),
      );
  },
});

export const {
  setPage,
  setSortField,
  setSortDirection,
  setItemsPerPage,
  setCurrentQuery,
  setSelectedRepository,
  setSearchQuery,
} = repositorySlice.actions;
export default repositorySlice.reducer;
