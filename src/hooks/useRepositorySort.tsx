import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@store/store";
import { setSortField, setSortDirection } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";
import { SortField, SortDirection } from "@type/Repository";

const useRepositorySort = () => {
  const dispatch: AppDispatch = useDispatch();
  const { sortField, sortDirection, itemsPerPage } = useSelector(
    (state: RootState) => state.repositories,
  );

  const handleSort = (field: SortField) => {
    const isAsc = sortField === field && sortDirection === "ASC";
    const newDirection: SortDirection = isAsc ? "DESC" : "ASC";
    dispatch(setSortField(field));
    dispatch(setSortDirection(newDirection));
    dispatch(
      searchRepositories({
        query: "",
        page: 1,
        sortField: field,
        sortDirection: newDirection,
        itemsPerPage,
      }),
    );
  };

  return { handleSort, sortField, sortDirection };
};

export default useRepositorySort;
