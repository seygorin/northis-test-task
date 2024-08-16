export interface LanguageNode {
  name: string;
}

export interface LanguageEdge {
  node: LanguageNode;
}

export interface LanguageConnection {
  edges: LanguageEdge[];
}

export interface TopicNode {
  topic: {
    name: string;
  };
}

export interface TopicEdge {
  node: TopicNode;
}

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
    name: string | null;
  } | null;
  languages?: LanguageConnection;
  repositoryTopics?: {
    edges: TopicEdge[];
  };
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
  selectedRepository: Repository | null;
  searchQuery: string;
}

export interface SearchRepositoriesParams {
  query: string;
  page: number;
  sortField: SortField;
  sortDirection: SortDirection;
  itemsPerPage: number;
}
