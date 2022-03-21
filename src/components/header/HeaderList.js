import React from "react";
import WideScreen from "./screen/WideScreen";
import ThinScreen from "./screen/ThinScreen";

const HeaderList = (props) => {
  let {cartCount} = props;
  let {user} = props;

  const pull_disconnect = () => {
    props.disconnect();
  };
  
  if (window.innerWidth > 700) {
    return <WideScreen cartCount={cartCount} user={user} disconnect={pull_disconnect}/>;
  } else {
    return <ThinScreen cartCount={cartCount}  user={user} disconnect={pull_disconnect}/>;
  }
};

export default HeaderList;
