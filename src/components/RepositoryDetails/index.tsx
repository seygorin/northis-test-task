import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Repository } from "@type/Repository";
import styles from "@styles/RepositoryDetails.module.scss";
import RepositoryTitle from "./RepositoryTitle";
import RepositoryInfo from "./RepositoryInfo";
import ChipList from "./ChipList";
import RepositoryLicense from "./RepositoryLicense";

interface RepositoryDetailsProps {
  repository: Repository | null;
}

function RepositoryDetails({
  repository,
}: RepositoryDetailsProps): React.ReactElement | null {
  const { t } = useTranslation();
  if (!repository) return null;

  const languages =
    repository.languages?.edges.map((edge) => edge.node.name) || [];
  const topics =
    repository.repositoryTopics?.edges.map((edge) => edge.node.topic.name) ||
    [];

  return (
    <Box className={styles.detailsContainer}>
      <RepositoryTitle name={repository.name} />
      <RepositoryInfo
        primaryLanguage={repository.primaryLanguage}
        stargazerCount={repository.stargazerCount}
      />
      {languages.length > 0 && <ChipList items={languages} />}
      {topics.length > 0 && <ChipList items={topics} variant="outlined" />}
      <RepositoryLicense licenseName={repository.licenseInfo?.name} />
      <Typography
        color="textSecondary"
        gutterBottom
        className={styles.description}
      >
        {repository.description || t("noDescriptionAvailable")}
      </Typography>
    </Box>
  );
}

export default RepositoryDetails;
