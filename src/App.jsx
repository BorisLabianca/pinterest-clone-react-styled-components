import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./App.styled";
import Home from "./home/Home";
import { THEME } from "./utils/themes";
import { useCallback, useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }, [currentTheme]);
  return (
    <ThemeProvider theme={THEME[currentTheme]}>
      <GlobalStyles />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
