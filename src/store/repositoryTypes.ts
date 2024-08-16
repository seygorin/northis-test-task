import { Repository, SortField, SortDirection } from "@type/Repository";

export interface RepositoryState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  sortField: SortField;
  sortDirection: SortDirection;
  itemsPerPage: number;
  currentQuery: string;
  totalCount: number;
  selectedRepository: Repository | null;
  searchQuery: string;
}

export const initialState: RepositoryState = {
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
