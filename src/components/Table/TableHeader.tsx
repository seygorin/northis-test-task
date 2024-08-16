import { TableHead, TableRow, TableCell } from "@mui/material";
import { useTranslation } from "react-i18next";
import SortableTableHeaderCell from "./SortableTableHeaderCell";

function TableHeader() {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <SortableTableHeaderCell label={t("name")} field="NAME" />
        <TableCell>{t("language")}</TableCell>
        <SortableTableHeaderCell label={t("forks")} field="FORKS" />
        <SortableTableHeaderCell label={t("stars")} field="STARS" />
        <SortableTableHeaderCell label={t("updatedAt")} field="UPDATED_AT" />
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
