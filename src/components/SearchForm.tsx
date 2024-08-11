import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { searchRepositories } from "@store/repositorySlice";
import styles from "@styles/SearchForm.module.scss";

function SearchForm(): React.ReactElement {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      searchRepositories({
        query,
        page: 1,
        sortField: "STARS",
        sortDirection: "DESC",
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        label="Search repositories"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
