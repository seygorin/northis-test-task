import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Repository } from "@type/Repository";
import styles from "@styles/RepositoryDetails.module.scss";

interface RepositoryDetailsProps {
  repository: Repository | null;
}

function RepositoryDetails({
  repository,
}: RepositoryDetailsProps): React.ReactElement | null {
  if (!repository) return null;

  return (
    <Card className={styles.detailsCard}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {repository.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {repository.description || "No description available"}
        </Typography>
        <Typography variant="body2" component="p">
          License: {repository.licenseInfo?.name || "Not specified"}
        </Typography>
        <Typography variant="body2" component="p">
          Language: {repository.primaryLanguage?.name || "Not specified"}
        </Typography>
        <Typography variant="body2" component="p">
          Forks: {repository.forkCount}
        </Typography>
        <Typography variant="body2" component="p">
          Stars: {repository.stargazerCount}
        </Typography>
        <Typography variant="body2" component="p">
          Last updated: {new Date(repository.updatedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RepositoryDetails;
