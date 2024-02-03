import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./App.styled";
import Home from "./home/Home";
import { THEME } from "./utils/themes";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  return (
    <ThemeProvider theme={THEME[currentTheme]}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
