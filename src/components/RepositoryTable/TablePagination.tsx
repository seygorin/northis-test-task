import { TablePagination as MuiTablePagination } from "@mui/material";

const DEFAULT_ITEMS_PER_PAGE = 50;
const MAX_ITEMS_COUNT = 1000;
const MIN_ITEMS_COUNT = 10;
const DEFAULT_PAGE = 20;

interface TablePaginationProps {
  totalCount: number;
  itemsPerPage: number;
  currentPage: number;
  onChangePage: (event: React.MouseEvent | null, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent) => void;
}

function TablePagination({
  totalCount,
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
  currentPage = DEFAULT_PAGE,
  onChangePage,
  onChangeRowsPerPage,
}: TablePaginationProps): React.ReactElement {
  return (
    <MuiTablePagination
      component="div"
      count={totalCount > MAX_ITEMS_COUNT ? MAX_ITEMS_COUNT : totalCount}
      page={currentPage}
      onPageChange={onChangePage}
      rowsPerPage={
        itemsPerPage > MIN_ITEMS_COUNT ? itemsPerPage : MIN_ITEMS_COUNT
      }
      onRowsPerPageChange={onChangeRowsPerPage}
    />
  );
}

export default TablePagination;
