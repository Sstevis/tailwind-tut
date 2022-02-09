import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500 "
          : "hidden"
      }
    >
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
  );
};

export default Dropdown;
