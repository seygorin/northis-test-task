import { useDispatch } from "react-redux";
import { setPage, setItemsPerPage } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";

function usePagination(
  currentQuery: string,
  sortField: string,
  sortDirection: string,
  itemsPerPage: number,
) {
  const dispatch = useDispatch();

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
