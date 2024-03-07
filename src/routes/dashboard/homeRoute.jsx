import { lazy } from "react";

const Login = lazy(() => import("@pages/auth/Login"));
const Home = lazy(() => import("@pages/Landing/home"));
const Melmilap = lazy(() => import("@pages/Landing/Melmilap"));
const HamroBarema = lazy(() => import("@pages/Landing/HamroBarema"));
const CaseRegistration = lazy(() => import("@pages/Landing/CaseRegistration"));
const Niyam = lazy(() => import("@pages/Landing/Niyam"));
const Tarekh = lazy(() => import("@pages/Landing/Tarekh"));
const MelmilapDarta = lazy(() => import("@pages/Landing/MelmilapDarta"));

export const home_routes = {
  layout: "landing",
  pages: [
    {
      name: "index",
      path: "/index",
      element: <Home />,
    },
    {
      name: "home",
      path: "",
      element: <Home />,
    },
    {
      name: "login",
      path: "login",
      element: <Login />,
    },
    {
      name: "melmilap",
      path: "melmilap",
      element: <Melmilap />,
    },
    {
      name: "hamro-barema",
      path: "hamro-barema",
      element: <HamroBarema />,
    },
    {
      name: "tarikh",
      path: "tarikh",
      element: <Tarekh />,
    },
    {
      name: "online-case-registration",
      path: "online-case-registration",
      element: <CaseRegistration />,
    },
    {
      name: "niyam",
      path: "niyam",
      element: <Niyam />,
    },
    {
      name: "melmilapkarta-darta",
      path: "melmilapkarta-darta",
      element: <MelmilapDarta />,
    },
  ],
};
