import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Patients from "../pages/Patients";
import PatientProfile from "../pages/PatientProfile";
import Appointments from "../pages/Appointments";
import Prescriptions from "../pages/Prescriptions";
import Billing from "../pages/Billing";
import Reports from "../pages/Reports";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* MAIN APP */}
        <Route element={<MainLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/patient-profile"
            element={<PatientProfile />}
          />

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route
            path="/prescriptions"
            element={<Prescriptions />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Route>

        {/* DEFAULT */}
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

      </Routes>

    </BrowserRouter>
  );
}