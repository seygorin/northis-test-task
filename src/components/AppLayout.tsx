import { Box } from "@mui/material";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "@styles/App.module.scss";

interface AppLayoutProps {
  onOutsideClick: () => void;
  onContentClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

function AppLayout({
  children,
  onOutsideClick,
  onContentClick,
}: AppLayoutProps): React.ReactElement {
  return (
    <Box className={styles.appWrapper} onClick={onOutsideClick}>
      <Header />
      <Box className={styles.appContainer} onClick={onContentClick}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default AppLayout;
