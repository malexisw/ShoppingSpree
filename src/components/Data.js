import React from "react";
import Loading from "./Loading";
import ArticlesList from "./articles/ArticlesList";
import { useEffect, useState } from "react";
import axios from "axios";

const Data = ({ param }) => {
  const [articlesAll, setArticlesAll] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  param = param === 'none' ? '' : '?'+param;

  useEffect(() => {
    setIsFetching(true)
    setData();
 }, [param]);

  const setData = async () => {
    const options = {
      method: "GET",
      url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list' + param,
      params: {
        country: "france",
        lang: "en",
        currentpage: "0",
        pagesize: "30",
      },
      headers: {
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        "x-rapidapi-key": "ca5faba32fmsh45e162df6c05b06p1ff074jsn10e5f1c67a9e",
      },
    };


    await axios
      .request(options)
      .then(function (response) {
        setArticlesAll(response.data.results);
      })
      .finally(() => setIsFetching(false))
      .catch(function (error) {
        console.error(error);
      });
  };

  const product = () => {
    if (isFetching) {
      return <Loading />;
    } else {
      return <ArticlesList articlesAll={articlesAll} />;
    }
  };

  return <div>{product()}</div>;
};

export default Data;
