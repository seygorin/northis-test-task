import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  CircularProgress,
} from "@mui/material";
import { RootState } from "@store/store";
import usePagination from "@hooks/usePagination";
import { Repository } from "@type/Repository";
import styles from "@styles/RepositoryTable.module.scss";

import TableHeader from "../Table/TableHeader";
import TableRows from "../Table/TableRows";
import TablePagination from "./TablePagination";

interface RepositoryTableProps {
  onSelectRepository: (repo: Repository) => void;
}

function RepositoryTable({
  onSelectRepository,
}: RepositoryTableProps): React.ReactElement {
  const {
    repositories,
    currentPage,
    itemsPerPage,
    totalCount,
    currentQuery,
    sortField,
    sortDirection,
    loading,
  } = useSelector((state: RootState) => state.repositories);

  const { handleChangePage, handleChangeRowsPerPage } = usePagination(
    currentQuery,
    sortField,
    sortDirection,
    itemsPerPage,
  );

  return (
    <div className={styles.tableWrapper}>
      <TableContainer className={styles.tableContainer}>
        <Table stickyHeader className={styles.table}>
          <TableHeader />
          {loading ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableRows
              repositories={repositories}
              onSelectRepository={onSelectRepository}
            />
          )}
        </Table>
      </TableContainer>
      <TablePagination
        totalCount={totalCount}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default RepositoryTable;
