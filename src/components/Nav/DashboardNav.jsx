/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { list } from "../../data/dashboard-accordian";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/slice/dashboard-nav";

function DashboardNav() {
  const [showList, setShowList] = useState({
    0: false,
    1: false,
  });
  const [rotated, setRotated] = useState({
    0: false,
    1: false,
  });
  const nav_active = useSelector((state) => state.dashboardNav.nav_active);
  const windowWidth = useSelector((state) => state.windowWidth.windowWidth);
  const dispatch = useDispatch();

  const toggleNestedList = (index) => {
    setShowList((prev) => {
      // for first nested list on 8th index.
      if (index == 8) {
        return {
          ...prev,
          [0]: !prev[0],
        };
      }

      // for second nested list on 9th index.
      if (index == 9) {
        return {
          ...prev,
          [1]: !prev[1],
        };
      }
    });

    setRotated((prev) => {
      if (index == 8) {
        return {
          ...prev,
          [0]: !prev[0],
        };
      }

      if (index == 9) {
        return {
          ...prev,
          [1]: !prev[1],
        };
      }
    });
  };

  return (
    <section
      className={`sidebar-section z-10 bg-sideBarBlue min-h-screen overflow-y-auto fixed top-0 hide-scrollbar left-0 h-full pb-16 md:block ${nav_active ? "" : "hidden"}`}
      style={
        nav_active && windowWidth <= 768
          ? { width: "100%" }
          : { width: "285px" }
      }
    >
      <div className="sidebar-wrapper">
        <section className="header-section">
          <div className="header-wrapper">
            <div
              className={`top-section flex gap-6 items-center p-5 ${windowWidth <= 768 ? "justify-start" : "justify-between"}`}
            >
              <a href="/admin/dashboard" className="logo-container">
                <img
                  src="/image/header/logo.png"
                  alt="logo"
                  style={{ width: "77px", height: "auto" }}
                />
              </a>
              <div className="text-container text-md font-semibold text-white w-32">
                <h1>काठमाडौँ महानगरपालिका</h1>
              </div>
            </div>
            {windowWidth <= 768 && (
              <div
                className="mobile-nav-termiate cursor-pointer text-white absolute top-4 right-4"
                onClick={() => dispatch(toggle())}
              >
                <Icon icon="charm:cross" fontSize={26} />
              </div>
            )}

            <div className="horizontal-line w-full h-0.5 bg-grey" />
          </div>
        </section>
        <section className="dashboard-section">
          <ul
            id="accordian"
            className="accordian-container flex flex-col gap-3.5 mt-6"
          >
            {list.map((item, index) => {
              if (!item.nestedList) {
                return (
                  <Link
                    key={index}
                    to={item.url}
                    className="flex px-4 items-center gap-4 justify-start text-white"
                    style={{ fontWeight: "bold", fontSize: "15px" }}
                    onClick={() => dispatch(toggle())}
                  >
                    {item.icon && (
                      <span className="icon text-xl">{item.icon}</span>
                    )}

                    {item.text}
                  </Link>
                );
              } else {
                return (
                  <li key={index} className="common-item mt-1 cursor-pointer">
                    <h4
                      className="accordian-title relative js-accordian-title flex gap-3.5 items-center justify-start px-4 text-white font-bold"
                      style={{
                        fontSize: "15px",
                      }}
                      onClick={() => toggleNestedList(index)}
                    >
                      {item.icon && (
                        <span className="icon text-xl">{item.icon}</span>
                      )}
                      {item.heading}
                      <span
                        className={`absolute right-4 transition-transform duration-300 ${rotated[index - 8] ? "rotate-0" : "rotate-180"}`}
                      >
                        <Icon icon="iconamoon:arrow-up-2" fontSize={24} />
                      </span>
                    </h4>
                    {showList[index - 8] ? (
                      <ul
                        className={`filter-sub-menu flex flex-col gap-3.5 mt-4`}
                      >
                        {item.list.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.url}
                            className="filter-sub-item flex pr-4 pl-16 items-center justify-between gap-4 justify-start text-white"
                            style={{ fontWeight: "bold", fontSize: "14px" }}
                            onClick={() => dispatch(toggle())}
                          >
                            {subItem.text}
                            {subItem.icon && (
                              <span className="icon text-xl">
                                {subItem.icon}
                              </span>
                            )}
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default DashboardNav;
