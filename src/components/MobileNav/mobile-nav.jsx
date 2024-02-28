import { navList } from "../../data/home-profile-info";

function MobileNav() {
  return (
    <ul className="nav-list absolute top-12 w-full bg-darkBlue flex flex-col">
      {navList.map(({ name, url }, index) => (
        <li
          className="navbar-list text-white font-semibold hover:bg-orange py-3.5 pl-12 pointer"
          key={index}
        >
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  );
}

export default MobileNav;
