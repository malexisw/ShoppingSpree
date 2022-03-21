import React from "react";
import Menu from "../Menu";
import Profil from "../Profil";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginProfil from "../LoginProfil";

const ThinScreen = (props) => {
  let {cartCount} = props;
  let {user} = props;
  const [showProfil, setShowProfil] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
    showProfil ? setShowProfil(false) : setShowProfil(false);
  };

  const handleProfil = () => {
    showProfil ? setShowProfil(false) : setShowProfil(true);
    showMenu ? setShowMenu(false) : setShowMenu(false);
  };

  const handleCart = () => {
    showProfil ? setShowProfil(false) : setShowProfil(false);
    showMenu ? setShowMenu(false) : setShowMenu(false);
  };

  const pull_disconnect = () => {
    props.disconnect();
  };

  if (user !== null) {
    return (
      <ul className="accountList sizeDown">
        <li onClick={() => handleMenu()}>
          <BiMenu />
          <Menu showMenu={showMenu} />
        </li>
        <li onClick={() => handleProfil()}>
          <BsFillPersonFill />
          <p>{user.firstname}</p>
          <LoginProfil showProfil={showProfil} disconnect={pull_disconnect} />
        </li>
  
        <li onClick={() => handleCart()}>
          <NavLink to="/cart" className="cartLi logo">
            <FaShoppingCart />
            <div className="cart-count">{cartCount}</div>
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="accountList sizeDown">
        <li onClick={() => handleMenu()}>
          <BiMenu />
          <Menu showMenu={showMenu} />
        </li>
        <li onClick={() => handleProfil()}>
          <BsFillPersonFill />
          <Profil showProfil={showProfil} />
        </li>
  
        <li onClick={() => handleCart()}>
          <NavLink to="/cart" className="cartLi logo">
            <FaShoppingCart />
            <div className="cart-count">{cartCount}</div>
          </NavLink>
        </li>
      </ul>
    );
  }
  
};

export default ThinScreen;
