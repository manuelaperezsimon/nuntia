import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import styledMainTheme from "../../styleMainTheme";
import PostsListPage from "../../pages/PostsListPage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

function App() {
  const isLoading = useAppSelector((state: RootState) => state.loading);

  return (
    <ThemeProvider theme={styledMainTheme}>
      <Routes>
        <Route
          path="/posts"
          element={
            <>
              <Loading isLoading={isLoading} />
              <PostsListPage />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
