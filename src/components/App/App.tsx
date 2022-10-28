import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import styledMainTheme from "../../styleMainTheme";
import PostsListPage from "../../pages/PostsListPage/PostsListPage";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Loading from "../Loading/Loading";
import FormPage from "../../pages/FormPage/FormPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

function App() {
  const isLoading = useAppSelector((state: RootState) => state.loading);

  return (
    <ThemeProvider theme={styledMainTheme}>
      <Loading isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostsListPage />} />
        <Route path="/edit/:id" element={<FormPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
