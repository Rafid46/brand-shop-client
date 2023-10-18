import { Link, NavLink } from "react-router-dom";
import logo from "../assets/1187936_OSO1XY1.png";
const NavBar = () => {
  const links = (
    <div>
      <div className="mt-10 mb-10">
        <ul>
          <li>
            <NavLink
              className="text-3xl font-semibold text-blue-200 mr-20"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className="text-3xl font-semibold text-blue-200 mr-20"
              to="/addProduct"
            >
              ADD PRODUCT
            </NavLink>
            <NavLink
              className="text-3xl font-semibold text-blue-200 mr-20"
              to="/"
            >
              MY CART
            </NavLink>
            <NavLink
              className="text-3xl font-semibold text-blue-200 mr-20"
              to="/"
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <div>
      <div className="navbar mb-10">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              {links}
            </ul>
            <a className="btn btn-ghost normal-case text-xl">
              <img className="w-10 h-10" src={logo} alt="" />
            </a>
          </div>
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal  px-1">{links}</ul>
        </div>
        <div className="navbar">
          {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 mr-2 rounded-full">
              <img src="" />
            </div>
          </label> */}
          {/* {user ? (
            <div>
              <img className="rounded-full w-[50px] mr-2" src={user.photoURL} />
              <p className="text-2xl font-thin text-white mr-2">
                {user.displayName}
              </p>
              <button
                onClick={handleSignOut}
                className="btn rounded-none w-[130px] hover:text-[#00FFE1]"
              >
                L O G O U T
              </button>
            </div>
          ) : (
            <div>
              <CgProfile className="text-white text-5xl font-normal mr-5 items-center"></CgProfile>
              <Link to="/login">
                <button className="btn rounded-none w-[130px] hover:text-[#00FFE1]">
                  L o g i n
                </button>
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
