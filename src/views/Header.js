import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderList from "../components/header/HeaderList";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Header = (props) => {
  let {cartCount} = props;
  let {user} = props;
  const [renderUl, setRenderUl] = useState();

  const pull_disconnect = () => {
    props.disconnect();
  };

  useEffect(() => {
    const onResize = () => {
      setRenderUl(<HeaderList cartCount={cartCount} user={user} disconnect={pull_disconnect}/>);
    };

    const debounceHandleResize = debounce(function handleResize() {
      onResize();
    }, 50);

    onResize();
  
    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [cartCount,user]);

  return (
    <header>
      <ul className="listAll">
        <li className="gender">
          <ul className="genderList">
            <li>
              <NavLink to="/ladies">Ladies</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/kids">Kids</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">
            <h1>Clothing Spree</h1>
          </NavLink>
        </li>
        <li className="account">{renderUl}</li>
      </ul>
    </header>
  );
};

export default Header;
