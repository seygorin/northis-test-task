import { RepositoryState } from "../types/Repository";

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  sortField: "STARS",
  sortDirection: "DESC",
  itemsPerPage: 10,
  currentQuery: "",
  totalCount: 0,
  selectedRepository: null,
  searchQuery: "",
};

export default initialState;
