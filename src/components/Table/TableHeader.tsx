import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <SortableTableHeaderCell
          label={t("name")}
          field="NAME"
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <TableCell>{t("language")}</TableCell>
        <SortableTableHeaderCell
          label={t("forks")}
          field="FORKS"
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <SortableTableHeaderCell
          label={t("stars")}
          field="STARS"
          handleSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <SortableTableHeaderCell
          label={t("updatedAt")}
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
