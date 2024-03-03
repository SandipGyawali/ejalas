/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../../redux/slice/dashboard-nav";
import { useSelector } from "react-redux";

const obj = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 8px",
  width: "calc(100vw - 285px)",
  marginLeft: "285px",
};

const obj2 = {
  width: "100vw",
  marginLeft: "0px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 8px",
};

function DashboardHeader() {
  const windowWidth = useSelector((state) => state.windowWidth.windowWidth);

  const [userSet, setUserSet] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className="top-section bg-skyBlue fixed top-0 flex items-center justify-between pl-4 pr-8  py-3"
      style={windowWidth <= "768" ? obj2 : obj}
    >
      <button className="mobile-menu" onClick={() => dispatch(toggle())}>
        <span className="toggle-btn cursor-pointer">
          <Icon icon="fa6-solid:list" fontSize={20} />
        </span>
      </button>
      <div className="heading-wrapper flex items-center gap-3 justify-center ">
        <div className="img-container">
          <img src="/image/court-house.png" alt="court-house" width={22} />
        </div>
        <a href="/admin/dashboard" className="text-xl">
          इजलास
        </a>
        <div className="img-container">
          <img src="/image/court-house.png" alt="court-house" width={22} />
        </div>
      </div>
      <div
        className="login-ser-wrapper flex gap-1.5 items-center relative cursor-pointer"
        onMouseEnter={() => setUserSet(true)}
        onMouseLeave={() => setUserSet(false)}
      >
        <Icon icon="solar:user-circle-linear" fontSize={18} />
        <h4>admin</h4>
        <Icon icon="iconamoon:arrow-down-2" fontSize={20} />
        {userSet && (
          <div
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              fontSize: "14px",
            }}
            className="user-options text-text-col font-bold absolute top-10 right-1 flex flex-col gap-2 w-fit min-w-44 px-2 py-1 bg-white5"
          >
            <Link to="/admin/change/password" className="px-1 py-2">
              पासवर्ड परिवर्तन गर्नुहोस्
            </Link>
            <hr />
            <Link to="/logout" className="px-1 py-1">
              लगआउट
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHeader;
