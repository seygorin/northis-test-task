import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "@styles/RepositoryDetails.module.scss";

interface RepositoryLicenseProps {
  licenseName: string | null;
}

function RepositoryLicense({
  licenseName,
}: RepositoryLicenseProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <Box className={styles.license}>
      <Typography variant="body2">
        {licenseName || t("notSpecified")}
      </Typography>
    </Box>
  );
}

export default RepositoryLicense;
