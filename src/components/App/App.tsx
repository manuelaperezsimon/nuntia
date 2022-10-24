import React from "react";
import { ThemeProvider } from "styled-components";
import styledMainTheme from "../../styleMainTheme";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
