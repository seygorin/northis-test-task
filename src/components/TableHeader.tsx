import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { SortField, SortDirection } from "@type/Repository";
import SortableTableHeaderCell from "./SortableTableHeaderCell";

interface TableHeaderProps {
  handleSort: (field: SortField) => void;
  sortField: SortField;
  sortDirection: SortDirection;
}

function TableHeader({
  handleSort,
  sortField,
  sortDirection,
}: TableHeaderProps): React.ReactElement {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Language</TableCell>
        <SortableTableHeaderCell
          label="Forks"
          field="FORKS"
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <SortableTableHeaderCell
          label="Stars"
          field="STARS"
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <SortableTableHeaderCell
          label="Updated At"
          field="UPDATED_AT"
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
