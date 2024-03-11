import { lazy } from "react";
const Role = lazy(() => import("@pages/dashboard/prayogKartaBewasthapan/role"));
const User = lazy(() => import("@pages/dashboard/prayogKartaBewasthapan/user"));

const PermissionManagement = lazy(
  () => import("@pages/dashboard/prayogKartaBewasthapan/permission-management"),
);

export const prayog_karta_routes = {
  layout: "dashboard",
  pages: [
    {
      path: "permission-management",
      element: <PermissionManagement />,
    },
    {
      path: "role",
      element: <Role />,
    },
    {
      path: "user",
      element: <User />,
    },
  ],
};
