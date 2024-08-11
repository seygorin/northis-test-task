import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import { Repository } from "@type/Repository";
import styles from "@styles/RepositoryTable.module.scss";

interface TableRowsProps {
  repositories: Repository[];
  onSelectRepository: (repo: Repository) => void;
}

function TableRows({
  repositories,
  onSelectRepository,
}: TableRowsProps): React.ReactElement {
  return (
    <TableBody>
      {repositories.map((repo) => (
        <TableRow
          key={repo.id}
          onClick={() => onSelectRepository(repo)}
          className={styles.tableRow}
        >
          <TableCell>{repo.name}</TableCell>
          <TableCell>{repo.primaryLanguage?.name || "N/A"}</TableCell>
          <TableCell>{repo.forkCount}</TableCell>
          <TableCell>{repo.stargazerCount}</TableCell>
          <TableCell>{new Date(repo.updatedAt).toLocaleDateString()}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableRows;
