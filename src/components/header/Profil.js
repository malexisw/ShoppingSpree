import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Profil = ({ showProfil }) => {
  return (
    <ul
      className="genderList card"
      style={{ display: showProfil ? "block" : "none" }}
    >
      <li className="inCard">
        <NavLink to="/login">
          <FaSignInAlt />
          <p>Login</p>
        </NavLink>
      </li>
      <li className="inCard">
        <NavLink to="/signup">
          <FaUserPlus />
          <p>Sign Up</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default Profil;
