// src/routes.js
import { ManageAccounts } from "@mui/icons-material";
import Dashboard from "../pages/dashboard";
import DashboardModuleWithTable from "../pages/fleetStatus";
import LoginPage from "../pages/login";
import VehicleManagement from "../pages/vehicleManagement";

export const routes = [
  {
    title: "Login",
    icon: ManageAccounts,
    link: "/", // path as string
    component: <LoginPage />,
  },
  {
    title: "Dashboard",
    icon: ManageAccounts,
    link: "/dashboard", // path as string
    component: <Dashboard />,
  },
  {
    title: "Fleet",
    icon: ManageAccounts,
    link: "/fleet", // path as string
    component: <DashboardModuleWithTable />,
  },
  {
    title: "Driver & Vehicle",
    icon: ManageAccounts,
    link: "/vehicle-management", // path as string
    component: <VehicleManagement />,
  },
];
