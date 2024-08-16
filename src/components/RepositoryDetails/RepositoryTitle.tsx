import { Typography, Box } from "@mui/material";
import styles from "@styles/RepositoryDetails.module.scss";

interface RepositoryTitleProps {
  name: string;
}

function RepositoryTitle({ name }: RepositoryTitleProps): React.ReactElement {
  return (
    <Box className={styles.titleContainer}>
      <Typography variant="h4" className={styles.title}>
        {name}
      </Typography>
    </Box>
  );
}

export default RepositoryTitle;
