import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import {
  setSortField,
  setSortDirection,
  searchRepositories,
} from "@store/repositorySlice";
import { SortField, SortDirection } from "@type/Repository";

const useRepositorySort = () => {
  const dispatch = useDispatch();
  const { sortField, sortDirection } = useSelector(
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
      }),
    );
  };

  return { handleSort, sortField, sortDirection };
};

export default useRepositorySort;