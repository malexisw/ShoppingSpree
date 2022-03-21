import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Data from "../components/Data";

const Home = () => {
  const param = 'none';

  return (
    <section className="home">
      <div className="carousel-content">
        <Carousel />
      </div>
      <Categories />
      <Data param={param}/>
    </section>
  );
};

export default Home; 