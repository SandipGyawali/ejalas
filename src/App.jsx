import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";

// lazy loading components
const Home = lazy(() => import("./pages/Landing/home"));
import { routes } from "./routes";

function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {routes.pages.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
