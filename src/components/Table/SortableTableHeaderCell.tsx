import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SortField } from "@type/Repository";
import { setSortField, setSortDirection } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";
import { RootState } from "@store/store";

interface SortableTableHeaderCellProps {
  label: string;
  field: SortField;
}

function SortableTableHeaderCell({
  label,
  field,
}: SortableTableHeaderCellProps): React.ReactElement {
  const dispatch = useDispatch();
  const { sortField, sortDirection, currentQuery, itemsPerPage } = useSelector(
    (state: RootState) => state.repositories,
  );

  const handleSort = (field: SortField) => {
    const newDirection =
      sortField === field && sortDirection === "DESC" ? "ASC" : "DESC";
    dispatch(setSortField(field));
    dispatch(setSortDirection(newDirection));
    dispatch(
      searchRepositories({
        query: currentQuery,
        page: 1,
        sortField: field,
        sortDirection: newDirection,
        itemsPerPage,
      }),
    );
  };

  return (
    <TableCell>
      <TableSortLabel
        active={sortField === field}
        direction={sortField === field ? sortDirection.toLowerCase() : "asc"}
        onClick={() => handleSort(field)}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
}

export default SortableTableHeaderCell;
