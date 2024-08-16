import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@store/store";
import { Repository } from "@type/Repository";
import { setSelectedRepository } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";
import AppLayout from "./AppLayout";
import RepositoryContent from "./RepositoryContent";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const {
    repositories,
    currentQuery,
    currentPage,
    sortField,
    sortDirection,
    itemsPerPage,
    selectedRepository,
  } = useSelector((state: RootState) => state.repositories);

  useEffect(() => {
    if (currentQuery) {
      dispatch(
        searchRepositories({
          query: currentQuery,
          page: currentPage,
          sortField,
          sortDirection,
          itemsPerPage,
        }),
      );
    }
  }, [
    currentQuery,
    currentPage,
    sortField,
    sortDirection,
    itemsPerPage,
    dispatch,
  ]);

  const handleSelectRepository = useCallback(
    (repo: Repository) => {
      dispatch(setSelectedRepository(repo));
    },
    [dispatch],
  );

  const handleOutsideClick = useCallback(() => {
    dispatch(setSelectedRepository(null));
  }, [dispatch]);

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <AppLayout
      onOutsideClick={handleOutsideClick}
      onContentClick={handleContentClick}
    >
      <RepositoryContent
        repositories={repositories}
        selectedRepository={selectedRepository}
        onSelectRepository={handleSelectRepository}
      />
    </AppLayout>
  );
}

export default App;
