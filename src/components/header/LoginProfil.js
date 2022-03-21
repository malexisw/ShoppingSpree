import React from "react";
import { BsPower } from "react-icons/bs";

const LoginProfil = (props) => {
  let { showProfil } = props;
  return (
    <ul
      className="genderList card"
      style={{ display: showProfil ? "block" : "none" }}
    >
      <li className="inCard" onClick={() => props.disconnect()}>
        <div className="link loginProfil">
          <BsPower />
          <p>Disconnect</p>
        </div>
      </li>
    </ul>
  );
};

export default LoginProfil;
