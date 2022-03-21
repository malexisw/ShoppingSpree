import React from "react";
import { CgTrash } from "react-icons/cg";

const CartList = (props) => {
  const { item } = props;

  return (
    <li className="item">
      <div className="img">
        <img src={item.img} alt="" />
      </div>
      <div className="info">
        <div className="top">
          <div className="text">
            <b className="brand">{item.brand}</b>
            <p className="name">{item.name}</p>
            <p className="color">Color : {item.color}</p>
            <p className="size">Size : {item.size}</p>
          </div>
          <div className="count">
            <a className="btn count-sub" onClick={() => (props.sub(item))} >
              -
            </a>
            <p className="count-render">{item.count}</p>
            <a className="btn count-add" onClick={() => (props.add(item))}>
              +
            </a>
          </div>
        </div>
        <div className="bot">
          <div className="delete">
            <a className="btn btn-delete" onClick={() => (props.delete(item.name))}>
              <CgTrash />
              Delete
            </a>
          </div>
          <p className="price">{item.price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartList;
