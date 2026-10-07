import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CreateArticlePage } from "../pages/CreateArticlePage";
import { ArticleDetailPage } from "../pages/ArticleDetailPage";
import { EditArticlePage } from "../pages/EditArticlePage";
import { ProfilePage } from "../pages/ProfilePage";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  const isLogged = localStorage.getItem("isLogged") === "true";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={isLogged ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/create-article"
          element={isLogged ? <CreateArticlePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/articles/:id"
          element={isLogged ? <ArticleDetailPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/articles/edit/:id"
          element={isLogged ? <EditArticlePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isLogged ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
