import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="min-h-[4rem]">
      <div className="navbar bg-base-300 shadow-md">
        <div className="flex-1">
          <Link to="/feed" className="ml-2 text-xl flex gap-2 items-center">
            <h2 className="font-bold">DevTinder</h2> 
            <img className="w-8 h-8" alt="logo" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1654585555653/b4pafSL1j.png"/>
          </Link>
        </div>

        <NavLinks/>
      </div>
    </div>
  );
};

export default NavBar;
