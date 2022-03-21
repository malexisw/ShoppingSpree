import React from 'react';
import { NavLink } from 'react-router-dom';
import {BsGenderFemale,BsGenderMale} from 'react-icons/bs';
import {FaChild} from "react-icons/fa";

const Menu = ({showMenu}) => {
    return (
        <ul
      className="genderList card"
      style={{ display: showMenu ? "block" : "none" }}
    >
      <li className="inCard">
        <NavLink to="/ladies">
          <BsGenderFemale />
          <p>Ladies</p>
        </NavLink>
      </li>
      <li className="inCard">
        <NavLink to="/men">
          <BsGenderMale />
          <p>Men</p>
        </NavLink>
      </li>
      <li className="inCard">
        <NavLink to="/kids">
          <FaChild />
          <p>Kids</p>
        </NavLink>
      </li>
    </ul>
    );
};

export default Menu;