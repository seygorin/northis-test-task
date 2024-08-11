import React from "react";
import { Pagination as MUIPagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { setPage, searchRepositories } from "@store/repositorySlice";
import styles from "@styles/Pagination.module.scss";

function Pagination(): React.ReactElement {
  const dispatch = useDispatch();
  const { currentPage, totalPages, sortField, sortDirection } = useSelector(
    (state: RootState) => state.repositories,
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(setPage(value));
    dispatch(
      searchRepositories({ query: "", page: value, sortField, sortDirection }),
    );
  };

  return (
    <div className={styles.pagination}>
      <MUIPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="large"
      />
    </div>
  );
}

export default Pagination;
