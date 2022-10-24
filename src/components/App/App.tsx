import React from "react";
import { ThemeProvider } from "styled-components";
import styledMainTheme from "../../styleMainTheme";
import PostList from "../PostList/PostList";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <div className="App">
        <PostList />
      </div>
    </ThemeProvider>
  );
}

export default App;
