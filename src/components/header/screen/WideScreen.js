import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import LoginProfil from "../LoginProfil";

const WideScreen = (props) => {
  let {cartCount} = props;
  let {user} = props;
  const [showProfil, setShowProfil] = useState(false);

  const handleProfil = () => {
    showProfil ? setShowProfil(false) : setShowProfil(true);
  };

  const pull_disconnect = () => {
    props.disconnect();
  };

  if (user !== null) {
    return (
      <ul className="accountList">
        <li className="cartLi" onClick={() => handleProfil()}>
          <BsFillPersonFill />
          <p>{user.firstname}</p>
          <LoginProfil showProfil={showProfil} disconnect={pull_disconnect}/>
        </li>
        <li>
          <NavLink to="/cart" className="cartLi">
            <FaShoppingCart />
            <div className="cart-count">{cartCount}</div>
            <p>Cart</p>
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="accountList">
        <li>
          <NavLink to="/login" className="cartLi">
            <FaSignInAlt />
            <p>Login</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="cartLi">
            <FaUserPlus />
            <p>Sign Up</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="cartLi">
            <FaShoppingCart />
            <div className="cart-count">{cartCount}</div>
            <p>Cart</p>
          </NavLink>
        </li>
      </ul>
    );
  }
};

export default WideScreen;
