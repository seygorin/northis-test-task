import { Button, Box } from "@mui/material";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import EuroIcon from "@mui/icons-material/Euro";
import { useTranslation } from "react-i18next";
import styles from "@styles/Header.module.scss";
import SearchForm from "../SearchForm";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language.startsWith("en") ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const getLanguageIcon = () => {
    return i18n.language.startsWith("en") ? (
      <CurrencyRubleIcon />
    ) : (
      <EuroIcon />
    );
  };

  return (
    <header className={styles.toolbar}>
      <Box className={styles.headerContainer}>
        <Box className={styles.searchFormContainer}>
          <SearchForm />
        </Box>
        <Button
          onClick={changeLanguage}
          color="inherit"
          className={styles.languageButton}
        >
          {getLanguageIcon()}
        </Button>
      </Box>
    </header>
  );
}

export default Header;
