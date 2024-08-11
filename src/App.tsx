import { useState, ReactElement } from "react";
import { Container, Grid } from "@mui/material";
import SearchForm from "@components/SearchForm";
import RepositoryTable from "@components/RepositoryTable";
import RepositoryDetails from "@components/RepositoryDetails";
import Pagination from "@components/Pagination";
import { Repository } from "@type/Repository";
import styles from "@styles/App.module.scss";

function App(): ReactElement {
  const [selectedRepository, setSelectedRepository] =
    useState<Repository | null>(null);

  const handleSelectRepository = (repo: Repository) => {
    setSelectedRepository(repo);
  };

  return (
    <Container className={styles.appContainer}>
      <h1>GitHub Repository Search</h1>
      <SearchForm />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <RepositoryTable onSelectRepository={handleSelectRepository} />
          <Pagination />
        </Grid>
        <Grid item xs={12} md={4}>
          <RepositoryDetails repository={selectedRepository} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
