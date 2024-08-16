import { Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import RepositoryTable from "@components/RepositoryTable";
import RepositoryDetails from "@components/RepositoryDetails";
import styles from "@styles/App.module.scss";
import { Repository } from "@type/Repository";

interface RepositoryContentProps {
  repositories: Repository[];
  selectedRepository: Repository | null;
  onSelectRepository: (repo: Repository) => void;
}

function RepositoryContent({
  repositories,
  selectedRepository,
  onSelectRepository,
}: RepositoryContentProps): React.ReactElement {
  const { t } = useTranslation();

  if (repositories.length === 0) {
    return (
      <Box className={styles.emptyStateContainer}>
        <Typography variant="h2">{t("welcome")}</Typography>
      </Box>
    );
  }

  return (
    <Grid container className={styles.gridContainerFlex}>
      <Grid item xs={12} md={8} className={styles.gridContainer}>
        <Typography variant="h3" gutterBottom>
          {t("searchResults")}
        </Typography>
        <RepositoryTable onSelectRepository={onSelectRepository} />
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
  );
}

export default RepositoryContent;
