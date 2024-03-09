import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";
import { masterData_routes } from "./routes/dashboard/masterDataBewasthaRoute";
import { home_routes } from "./routes/dashboard/homeRoute";
import Case from "./pages/dashboard/case";

// lazy loading components
const Home = lazy(() => import("./pages/Landing/home"));
const DashboardLayout = lazy(() => import("./Layout/DashboardLayout"));

function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {home_routes.pages.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          {masterData_routes.pages.map(({ path, element }, index) => (
            <Route path={path} element={element} key={index} />
          ))}
          <Route path="cases" element={<Case />} />
          <Route path="old-cases" element={<Case />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
