import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../components/layout";
import Dashboard from "../pages/dashboard";
import Events from "../pages/events";
import Login from "../pages/login";
import Registrations from "../pages/registrations";
import Teams from "../pages/teams";

export default function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("auth") === "true";

      setIsAuthenticated(authStatus);
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/events" /> : <Login />}
        />

        <Route
          element={isAuthenticated ? <PrivateLayout /> : <Navigate to="/" />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/registrations" element={<Registrations />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
