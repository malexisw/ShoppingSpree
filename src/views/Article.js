import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import ArticleInfo from "../components/article/ArticleInfo";
import ArticlePres from "../components/article/ArticlePres";
import {BsArrowReturnLeft} from "react-icons/bs";

const Article = (props) => {
  const location = useLocation();
  const { article } = location.state;

  const addCount = () => {
    props.addCount();
  }
  return (
    <section className="article">
      <NavLink to="/" className="back"><BsArrowReturnLeft /> Back</NavLink>
      <div className="produit">
        <ArticlePres article={article} />
        <ArticleInfo article={article} addCount={addCount}/>
      </div>
    </section>
  );
};

export default Article;
