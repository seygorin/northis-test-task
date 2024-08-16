import { Typography, Link } from "@mui/material";
import styles from "@styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        by{" "}
        <Link
          href="https://github.com/seygorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          seygorin
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
