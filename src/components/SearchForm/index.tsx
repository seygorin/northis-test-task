import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { setCurrentQuery, setSearchQuery } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";
import { RootState, AppDispatch } from "@store/store";
import styles from "@styles/SearchForm.module.scss";

function SearchForm() {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { sortField, sortDirection, itemsPerPage, searchQuery } = useSelector(
    (state: RootState) => state.repositories,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCurrentQuery(searchQuery));
    dispatch(
      searchRepositories({
        query: searchQuery,
        page: 1,
        sortField,
        sortDirection,
        itemsPerPage,
      }),
    );
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextField
        value={searchQuery}
        onChange={handleQueryChange}
        placeholder={t("searchRepositories")}
        size="small"
        fullWidth
        variant="outlined"
        InputProps={{
          className: styles.searchInput,
        }}
      />
      <Button
        type="submit"
        variant="contained"
        size="medium"
        color="primary"
        className={styles.searchButton}
      >
        {t("search")}
      </Button>
    </form>
  );
}

export default SearchForm;
