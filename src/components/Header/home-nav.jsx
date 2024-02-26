/* eslint-disable react/prop-types */
import propTypes from "prop-types";

function HomeNav({ navList }) {
  return (
    <div className="navigation-header ">
      <div className="navigation-container">
        <div className="navigation-wrapper flex justify-center">
          <div className="mobile-menu"></div>
          <ul className="nav-list flex flex-wrap font-medium justify-between w-11/12">
            {navList.map((data, index) => (
              <li
                key={index}
                className="hover:bg-orange hover:text-white py-4 px-4"
              >
                <a href={data.url}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

HomeNav.prototype = {
  navList: propTypes.array.isRequired,
};

export default HomeNav;
