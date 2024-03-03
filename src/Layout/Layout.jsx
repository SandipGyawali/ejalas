import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";
import HomeNav from "../components/Nav/home-nav";
import { navList } from "../data/home-profile-info";

function Layout() {
  return (
    <Fragment>
      <NavBar />
      <div className="main-container">
        <HomeNav navList={navList} />
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Layout;
