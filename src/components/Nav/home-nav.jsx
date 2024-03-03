/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import propTypes from "prop-types";
import { useContext } from "react";
import { mobileContext } from "../../context/mobileNavContext";
import MobileNav from "../MobileNav/mobile-nav";

function HomeNav({ navList }) {
  const { showMobileNav, setShowMobileNav } = useContext(mobileContext);

  return (
    <div
      className="navigation-header bg-white"
      style={{
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="navigation-container">
        <div className="navigation-wrapper flex justify-center relative">
          <div
            className="mobile-menu md:hidden py-4 w-11/12 cursor-pointer"
            onClick={() => {
              setShowMobileNav((prev) => !prev);
            }}
          >
            <Icon icon="fa:bars" fontSize={16} />
          </div>
          <ul className="nav-list hidden md:flex flex-wrap font-semibold justify-between w-11/12 text-grey">
            {navList.map((data, index) => (
              <li
                key={index}
                className="hover:bg-orange hover:text-white px-4 py-4"
              >
                <a href={data.url}>{data.name}</a>
              </li>
            ))}
          </ul>
          {showMobileNav ? <MobileNav /> : ""}
        </div>
      </div>
    </div>
  );
}

HomeNav.propTypes = {
  navList: propTypes.array.isRequired,
};

export default HomeNav;
