export interface Repository {
  id: string;
  name: string;
  description: string | null;
  primaryLanguage: {
    name: string;
  } | null;
  forkCount: number;
  stargazerCount: number;
  updatedAt: string;
  licenseInfo: {
    name: string;
  } | null;
}

export interface RepositoryEdge {
  node: Repository;
}

export interface RepositoryConnection {
  edges: RepositoryEdge[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
  repositoryCount: number;
}

export interface SearchRepositoriesData {
  search: RepositoryConnection;
}

export type SortField = "STARS" | "FORKS" | "UPDATED_AT" | "NAME";
export type SortDirection = "ASC" | "DESC";

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
}

export interface SearchRepositoriesParams {
  query: string;
  page: number;
  sortField: SortField;
  sortDirection: SortDirection;
  itemsPerPage: number;
}
