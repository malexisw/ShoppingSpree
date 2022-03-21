import React from "react";
import { BsFillBasket3Fill } from "react-icons/bs";

const ArticleInfo = (props) => {
  let { article } = props;
  let size = article.variantSizes[0].filterCode;

  const sizeList = article.variantSizes.map((size, index) => (
    <option value={size.filterCode} key={index}>
      {size.filterCode}
    </option>
  ));

  const circlesColors = article.rgbColors.map((color, index) => (
    <div
      className={"circle c" + index}
      style={{ background: color }}
      key={index}
    ></div>
  ));

  const concept = () => {
    if (article.concept !== undefined) {
      return <span className="concept">{article.concept[0]} - </span>;
    } else {
      return <></>;
    }
  };

  const addToCart = () => {
    const cartArticle = {
      brand: article.brandName,
      name: article.name,
      price: article.price.formattedValue,
      img: article.defaultArticle.images[0].url,
      color: article.articleColorNames[0],
      size: size,
      count: 1,
    };

    localStorage.setItem("item " + article.name, JSON.stringify(cartArticle));
    props.addCount();
  };

  return (
    <div className="info">
      <div className="selling-code">
        <p>
          {concept()}
          <span className="sellingAttribute">
            {article.sellingAttributes} -
          </span>
          <span className="brand">{article.brandName}</span>
        </p>
      </div>

      <h1 className="name">{article.name}</h1>

      <h2 className="price">{article.price.formattedValue}</h2>

      <label>
        <p className="size">Size</p>
        <select
          name="size"
          id="size-select"
          onChange={(e) => (size = e.target.value)}
        >
          {sizeList}
        </select>
      </label>
      <br />
      <p className="color">Colors</p>
      <div className="colors">{circlesColors}</div>
      <br />

      <div className="btn btn-cart" onClick={addToCart}>
        <BsFillBasket3Fill /> <p>Add to cart</p>
      </div>
    </div>
  );
};

export default ArticleInfo;
