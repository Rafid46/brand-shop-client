import { Link, NavLink } from "react-router-dom";
import logo from "../assets/1187936_OSO1XY1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import swal from "sweetalert";
import { CgProfile } from "react-icons/Cg";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        return swal("", "Logout successfully", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            {user && (
              <>
                <NavLink
                  className="text-3xl font-semibold text-blue-200 mr-20"
                  to="/addProduct"
                >
                  ADD PRODUCT
                </NavLink>
                <NavLink
                  className="text-3xl font-semibold text-blue-200 mr-20"
                  to="/myCart"
                >
                  MY CART
                </NavLink>
              </>
            )}
            <NavLink
              className="text-3xl font-semibold text-blue-300 mr-0 lg:mr-20"
              to="/login"
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
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-0">
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
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-[50px] h-[50px]" src={logo} alt="" />
            <p className="text-4xl font-bol text-[#00FFE1] font-Com">Spark</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal  px-1">{links}</ul>
        </div>
        <div className="navbar">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          ></label>
          {user ? (
            <div>
              <img
                className="rounded-full w-[40px] h-[40px] mr-2"
                src={user.photoURL}
              />
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
              <CgProfile className="text-gray-400 text-5xl font-normal mr-1 lg:mr-5 items-center"></CgProfile>
              <Link to="/login">
                <button className="btn rounded-none w-[130px] hover:text-[#00FFE1]">
                  L o g i n
                </button>
              </Link>
            </div>
          )}
          <label className="swap ml-5 swap-rotate bg-white rounded-full">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
