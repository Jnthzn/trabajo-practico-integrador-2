import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  const isLogged = localStorage.getItem("isLogged") === "true";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={isLogged ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
