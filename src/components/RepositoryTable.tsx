import React from "react";
import { useSelector } from "react-redux";
import { TableContainer, Paper, Table } from "@mui/material";
import { RootState } from "@store/store";
import useRepositorySort from "@hooks/useRepositorySort";
import { Repository } from "@type/Repository";
import styles from "@styles/RepositoryTable.module.scss";

import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

interface RepositoryTableProps {
  onSelectRepository: (repo: Repository) => void;
}

function RepositoryTable({
  onSelectRepository,
}: RepositoryTableProps): React.ReactElement {
  const { repositories } = useSelector(
    (state: RootState) => state.repositories,
  );
  const { handleSort, sortField, sortDirection } = useRepositorySort();

  return (
    <TableContainer component={Paper}>
      <Table className={styles.table}>
        <TableHeader
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <TableRows
          repositories={repositories}
          onSelectRepository={onSelectRepository}
        />
      </Table>
    </TableContainer>
  );
}

export default RepositoryTable;
