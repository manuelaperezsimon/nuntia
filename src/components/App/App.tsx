import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import styledMainTheme from "../../styleMainTheme";
import PostsListPage from "../../pages/PostsListPage/PostsListPage";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Loading from "../Loading/Loading";
import FormPage from "../../pages/FormPage/FormPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

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
        <Route path="/edit/:id" element={<FormPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
