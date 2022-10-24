import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import styledMainTheme from "../../styleMainTheme";
import PostsListPage from "../../pages/PostsListPage";

function App() {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route
          path="/posts"
          element={
            <>
              <PostsListPage />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
