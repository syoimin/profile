import Box from "@mui/material/Box";
import React from "react";
import Header from "../components/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import Divider from "@mui/material/Divider";

interface HomeTemplateProps {
  children: React.ReactNode;
}

const Home: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#F6F6F4" }}>
        <Header />
        <main>{children}</main>
        <Box pt={3} pl={5} pr={5}>
          <Divider />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
