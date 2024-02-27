import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";
import Melmilap from "./pages/Melmilap/Melmilap";
// lazy loading components
const Home = lazy(() => import("./pages/Home/home"));
const Login = lazy(() => import("./pages/auth/Login"));

function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="index" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="melmilap" element={<Melmilap />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
