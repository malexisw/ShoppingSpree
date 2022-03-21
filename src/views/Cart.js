import React from "react";
import { useEffect, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import CartList from "../components/cart/CartList";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  let retrieved = [];

  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    for (let i = 0, len = localStorage.length; i < len; i++) {
      const key = localStorage.key(i);
      if (key.includes("item")) {
        retrieved.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    setCart(retrieved);
  };

  const onSub = (item) => {
    const countUpdate = item.count - 1;
    if (countUpdate === 0) {
      onDelete(item.name);
    } else {
      let newCart = cart.map((el) =>
        el.name === item.name ? { ...el, count: countUpdate } : el
      );
      setCart(newCart);
      localStorage.setItem("item " + item.name, JSON.stringify(newCart[0]));
    }
  };

  const onAdd = (item) => {
    let newCart = cart.map((el) =>
      el.name === item.name ? { ...el, count: el.count + 1 } : el
    );
    setCart(newCart);
    localStorage.setItem("item " + item.name, JSON.stringify(newCart[0]));
  };

  const onDelete = (name) => {
    localStorage.removeItem("item " + name);
    getCart();
    props.subCount();
  };

  const listCart = cart.map((item, index) => (
    <CartList
      item={item}
      delete={onDelete}
      sendCart={getCart}
      add={onAdd}
      sub={onSub}
      key={index}
    />
  ));

  return (
    <>
      <NavLink to="/" className="back">
        <BsArrowReturnLeft /> Back
      </NavLink>
      <section className="cart">
        <div className="inCart">
          <h1>My cart ({cart.length} articles)</h1>
          <ul>{listCart}</ul>
        </div>
      </section>
    </>
  );
};

export default Cart;
