import { Box, Chip } from "@mui/material";
import styles from "@styles/RepositoryDetails.module.scss";

interface ChipListProps {
  items: string[];
  variant: "filled" | "outlined";
}

function ChipList({
  items,
  variant = "filled",
}: ChipListProps): React.ReactElement {
  return (
    <Box className={styles.chipContainer}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          variant={variant}
          className={styles.statChip}
        />
      ))}
    </Box>
  );
}

export default ChipList;
