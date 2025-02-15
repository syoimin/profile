// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Box from "@mui/material/Box";

import Header from "../components/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import Divider from "@mui/material/Divider";


const theme = createTheme({
  palette: {
    primary: {
      fontColorDark: "#661616",
      bgDark2: "#5f5f5f",
      bgDark: "rgb(171, 110, 125)",
      bgLight: "#f6dfe2",
      bgLight2: "#f6f6f4",
      bgLight3: "#93354d",
      light: "#c36075",
      main: "#b33e5c",
      dark: "#93354d",
      contrastText: "#fff",
      contrastText2: "#ff4081",
      link: "#00f1e3",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

interface DefaultTemplateProps {
  children: React.ReactNode;
  className: string;
  bgColor: string;
}

const Default = (Props: DefaultTemplateProps) => {
  const { children, className, bgColor } = Props;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: bgColor }}>
        <Header />
        <Container maxWidth="xl">
          <main className={className}>{children}</main>
        </Container>
        <Box pt={3}>
          <Divider />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Default;
