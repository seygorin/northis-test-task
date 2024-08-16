import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@store/store";
import { SortField } from "@type/Repository";
import { setSortField, setSortDirection } from "@store/repositorySlice";
import searchRepositories from "@store/repositoryThunks";

interface SortableTableHeaderCellProps {
  label: string;
  field: SortField;
}

function SortableTableHeaderCell({
  label,
  field,
}: SortableTableHeaderCellProps): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const { sortField, sortDirection, currentQuery, itemsPerPage } = useSelector(
    (state: RootState) => state.repositories,
  );

  const handleSort = (sortFieldParam: SortField) => {
    const newDirection =
      sortField === sortFieldParam && sortDirection === "DESC" ? "ASC" : "DESC";
    dispatch(setSortField(sortFieldParam));
    dispatch(setSortDirection(newDirection));
    dispatch(
      searchRepositories({
        query: currentQuery,
        page: 1,
        sortField: sortFieldParam,
        sortDirection: newDirection,
        itemsPerPage,
      }),
    );
  };

  return (
    <TableCell>
      <TableSortLabel
        active={sortField === field}
        direction={
          sortField === field
            ? (sortDirection.toLowerCase() as "asc" | "desc")
            : "asc"
        }
        onClick={() => handleSort(field)}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
}

export default SortableTableHeaderCell;
