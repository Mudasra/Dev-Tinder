import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems";

const NavLinks = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="flex-none gap-3">
      {user ? (
        <>
          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center gap-3">
            <NavItems />
          </div>

          {/* Mobile Navbar */}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavItems />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavLinks;
