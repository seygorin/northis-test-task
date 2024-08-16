import { Box, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import styles from "@styles/RepositoryDetails.module.scss";

interface RepositoryInfoProps {
  primaryLanguage: { name: string } | null;
  stargazerCount: number;
}

function RepositoryInfo({
  primaryLanguage,
  stargazerCount,
}: RepositoryInfoProps): React.ReactElement {
  return (
    <Box className={styles.infoContainer}>
      {primaryLanguage && (
        <Chip
          label={primaryLanguage.name}
          color="primary"
          className={styles.languageChip}
        />
      )}
      <Box className={styles.starCount}>
        <StarIcon fontSize="small" />
        <span>{stargazerCount}</span>
      </Box>
    </Box>
  );
}

export default RepositoryInfo;
