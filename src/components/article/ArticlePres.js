import React, {useState} from "react";

const ArticlePres = ({ article }) => {
  return (
    <div className="presentation">
      <div className="logos">
      <img
          className="logo"
          src={article.defaultArticle.logoPicture[0].url}
          alt=""
        />
        <img
          className="logo"
          src={article.defaultArticle.images[0].url}
          alt=""
        />
      </div>
      <img
        className="picture"
        src={article.defaultArticle.logoPicture[0].url}
        alt=""
      />
    </div>
  );
};

export default ArticlePres;
