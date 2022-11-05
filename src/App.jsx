import React from "react";
import { useContext } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";

import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from 'styled-components';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles></GlobalStyles>
        <LandingPage></LandingPage>
      </ThemeProvider>
    </>
  );
}

export default App;
