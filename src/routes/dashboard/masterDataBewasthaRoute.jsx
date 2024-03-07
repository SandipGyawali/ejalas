import { lazy } from "react";

const DashboardHome = lazy(() => import("@pages/dashboard/dashboard-home"));
const ComplainType = lazy(
  () => import("@pages/dashboard/masterDataBewasthapan/complain-type"),
);
const CourtType = lazy(
  () => import("@pages/dashboard/masterDataBewasthapan/court-type"),
);
const Department = lazy(
  () => import("@pages/dashboard/masterDataBewasthapan/department"),
);
const AboutUs = lazy(
  () => import("@pages/dashboard/masterDataBewasthapan/about-us"),
);
const Ward = lazy(() => import("@pages/dashboard/masterDataBewasthapan/ward"));
const MelmilapKarta = lazy(
  () => import("@pages/dashboard/masterDataBewasthapan/melmilapKarta"),
);

export const masterData_routes = {
  layout: "dashboard",
  pages: [
    {
      path: "dashboard",
      element: <DashboardHome />,
    },
    {
      path: "complaint-type",
      element: <ComplainType />,
    },
    {
      path: "court-type",
      element: <CourtType />,
    },
    {
      path: "department",
      element: <Department />,
    },
    {
      path: "about-us",
      element: <AboutUs />,
    },
    {
      path: "ward",
      element: <Ward />,
    },
    {
      path: "melmilapKarta",
      element: <MelmilapKarta />,
    },
  ],
};
