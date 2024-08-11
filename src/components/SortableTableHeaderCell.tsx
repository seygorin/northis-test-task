import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";
import { SortField, SortDirection } from "@type/Repository";

interface SortableTableHeaderCellProps {
  label: string;
  field: SortField;
  handleSort: (field: SortField) => void;
  sortField: SortField;
  sortDirection: SortDirection;
}

function SortableTableHeaderCell({
  label,
  field,
  handleSort,
  sortField,
  sortDirection,
}: SortableTableHeaderCellProps): React.ReactElement {
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
