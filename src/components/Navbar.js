import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <NavLink to="/" className="pl-8 ">
        EggMeals
      </NavLink>

      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8  hidden md:block ">
        <NavLink className="p-4" to="/">
          Home
        </NavLink>
        <NavLink className="p-4" to="/menu">
          Menu
        </NavLink>
        <NavLink className="p-4" to="/about">
          About
        </NavLink>
        <NavLink className="p-4" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
