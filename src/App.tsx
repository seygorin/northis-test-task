import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "@components/Header";
import RepositoryTable from "@components/RepositoryTable";
import RepositoryDetails from "@components/RepositoryDetails";
import Footer from "@components/Footer";
import { RootState } from "@store/store";
import { Repository } from "@type/Repository";
import { setSelectedRepository } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";

import styles from "@styles/App.module.scss";

function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
    <Box className={styles.appWrapper} onClick={handleOutsideClick}>
      <Header />
      <Box className={styles.appContainer} onClick={handleContentClick}>
        {repositories.length === 0 ? (
          <Box className={styles.emptyStateContainer}>
            <Typography variant="h2">{t("welcome")}</Typography>
          </Box>
        ) : (
          <Grid container className={styles.gridContainerFlex}>
            <Grid item xs={12} md={8} className={styles.gridContainer}>
              <Typography variant="h3" gutterBottom>
                {t("searchResults")}
              </Typography>
              <RepositoryTable onSelectRepository={handleSelectRepository} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                {selectedRepository ? (
                  <RepositoryDetails repository={selectedRepository} />
                ) : (
                  <Typography className={styles.selectMessage}>
                    {t("pleaseSelectRepository")}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
