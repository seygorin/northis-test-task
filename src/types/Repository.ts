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
}

export interface SearchRepositoriesData {
  search: RepositoryConnection;
}

export type SortField = "STARS" | "FORKS" | "UPDATED_AT";
export type SortDirection = "ASC" | "DESC";
