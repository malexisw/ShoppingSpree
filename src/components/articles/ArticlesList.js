import React from "react";
import { NavLink } from "react-router-dom";

const ArticlesList = ({ articlesAll }) => {

  const articlesList = articlesAll.map((article, index) => (
    <li key={index} className="articlesLi">
      <NavLink to="/article" state={{ article: article }}>
        <div className="img-container">
          <img
            src={article.defaultArticle.logoPicture[0].url}
            onMouseOver={(e) =>
              (e.currentTarget.src = article.defaultArticle.images[0].url)
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = article.defaultArticle.logoPicture[0].url)
            }
            alt=""
          />
          <div
            className="cardSize"
            onMouseOver={(e) => (e.currentTarget.className = "cardSize actif")}
            onMouseOut={(e) => (e.currentTarget.className = "cardSize inactif")}
          >
            <p>Size available</p>
            <ul className="sizeUl">
              {article.variantSizes.map((size, index) => (
                <li className="sizeLi" key={index}>
                  {size.filterCode}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="desc-text">
          <p className="text">
            {article.name} - 
            {article.brandName}
          </p>
        </div>

        <p className="price">{article.price.formattedValue}</p>
      </NavLink>
    </li>
  ));

  return (
    <div className="articles">
      <ul>{articlesList}</ul>
    </div>
  );
};

export default ArticlesList;
