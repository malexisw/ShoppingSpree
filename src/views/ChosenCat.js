import React from "react";
import { useLocation } from "react-router";
import Categories from "../components/Categories";
import Data from "../components/Data";

const ChoosenCat = () => {
  const location = useLocation();
  const { category } = location.state;

  let path = location.pathname;

  const link = () => {
    if (path.includes("men")) {
      return category.menLink;
    } else if (path.includes("ladies")) {
      return category.ladiesLink;
    } else if (path.includes("kids")) {
      return category.kidsLink;
    } else {
      return category.menLink +'&'+ category.ladiesLink +'&'+ category.kidsLink;
    }
  };

  return (
    <section className="choosenCat">
      <Categories />
      <h1>{category.name}</h1>
      <Data param={link()} />
    </section>
  );
};

export default ChoosenCat;
