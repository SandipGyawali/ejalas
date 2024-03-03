import DashboardNav from "../components/Nav/DashboardNav";
import DashboardFooter from "../components/Nav/DashboardFooter";
import DashboardHeader from "../components/Nav/DashboardHeader";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWindowWidth } from "../redux/slice/windowWidth";

const obj = {
  marginLeft: 285,
  marginTop: 25,
  height: "100%",
  overflowY: "auto",
};

const obj2 = {
  marginTop: 25,
  height: "100%",
  overflowY: "auto",
};

function DashboardLayout() {
  const windowWidth = useSelector((state) => state.windowWidth.windowWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]); // Empty array ensures this effect runs only once at mount

  return (
    <div className="content-wrapper overflow-hidden">
      <DashboardHeader />
      <DashboardNav />
      <div
        className="body block pl-4 pt-12 pb-20 overflow-y-scroll"
        style={windowWidth <= 768 ? obj2 : obj}
      >
        <Outlet />
      </div>
      <DashboardFooter />
    </div>
  );
}

export default DashboardLayout;
