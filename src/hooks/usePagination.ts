import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { setPage, setItemsPerPage } from "@store/repositorySlice";
import { SortField, SortDirection } from "@type/Repository";
import searchRepositories from "@store/repositoryThunks";

function usePagination(
  currentQuery: string,
  sortField: SortField,
  sortDirection: SortDirection,
  itemsPerPage: number,
) {
  const dispatch: AppDispatch = useDispatch();

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPage(newPage + 1));
    dispatch(
      searchRepositories({
        query: currentQuery,
        page: newPage + 1,
        sortField,
        sortDirection,
        itemsPerPage,
      }),
    );
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    dispatch(setItemsPerPage(newItemsPerPage));
    dispatch(setPage(1));
    dispatch(
      searchRepositories({
        query: currentQuery,
        page: 1,
        sortField,
        sortDirection,
        itemsPerPage: newItemsPerPage,
      }),
    );
  };

  return { handleChangePage, handleChangeRowsPerPage };
}

export default usePagination;
