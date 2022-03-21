import React, { useState, useEffect }  from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router';

const Categories = () => {
  const categories = [
    {
      img: "/img/categories/new.jpg",
      name: "New",
      menLink:
        "categories=men_newarrivals_clothes",
      ladiesLink:"categories=ladies_newarrivals_clothes",
      kidsLink:"categories=kids_kids_newarrivals",
    },
    {
      img: "/img/categories/sweater.jpg",
      name: "Sweater",
      menLink:
        "categories=men_hoodiessweatshirts",
        ladiesLink:"categories=ladies_cardigansjumpers_jumpers",
        kidsLink:"categories=kids_clothing_jumperssweatshirt",
    },
    {
      img: "/img/categories/top.jpg",
      name: "Top",
      menLink: "categories=men_tshirtstanks",
      ladiesLink:"categories=ladies_tops",
      kidsLink:"categories=kids_clothing_tops",
    },
    {
      img: "/img/categories/jeans.jpg",
      name: "Jeans",
      menLink: "categories=men_jeans",
      ladiesLink:"categories=ladies_jeans",
      kidsLink:"categories=kids_clothing_trousersjeans_jeans",
    },
    {
      img: "/img/categories/pants.jpg",
      name: "Pants",
      menLink: "categories=men_trousers",
      ladiesLink:"categories=ladies_trousers",
      kidsLink:"categories=kids_clothing_trousersjeans_trousers",
    },
  ];

  const location = useLocation();
  let path = location.pathname;
  let nextPath;

  const link = (cat) => {
    if(path.includes("men") || path.includes("ladies") || path.includes("kids")){
      nextPath = path.includes("men") ? "/men" : nextPath;
      nextPath = path.includes("ladies") ? "/ladies" : nextPath;
      nextPath = path.includes("kids") ? "/kids" : nextPath;
      return (
        <NavLink to={nextPath + "/chosenCat"} state={{ category: cat }}>
          <img className={"circle " + cat.name} src={cat.img} alt="" />
          <p>{cat.name}</p>
        </NavLink>
      );
    } else {
      return (
        <NavLink to="/chosenCat" state={{ category: cat }}>
          <img className={"circle " + cat.name} src={cat.img} alt="" />
          <p>{cat.name}</p>
        </NavLink>
      );
    }
    
    
  };

  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <li className="circleList" key={index}>
          {link(category)}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
