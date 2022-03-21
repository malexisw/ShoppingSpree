import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./views/Article";
import Cart from "./views/Cart";
import ChosenCat from "./views/ChosenCat";
import Gender from "./views/Gender";
import Header from "./views/Header";
import Home from "./views/Home";
import Login from "./views/log/Login";
import SignUp from "./views/log/SignUp";
import NotFound from "./views/NotFound";
import { useState, useEffect } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState({});

  const addCount = () => {
    setCartCount(cartCount + 1);
  };
  const subCount = () => {
    setCartCount(cartCount - 1);
  };
  const pull_userInfo = (data) => {
    setUser(data);
  }
  const onDisconnect = () => {
    setUser(null);
  } 

  useEffect(() => {
    const getCartCount = () => {
      let count = 0;
      for (let i = 0, len = localStorage.length; i < len; i++) {
        const key = localStorage.key(i);
        if (key.includes("item")) {
          count++;
        }
      }
      setCartCount(count);
    };

    const getUser = () => {
      const logInfo = JSON.parse(localStorage.getItem("logInfo"));
      setUser(logInfo);
    }

    getCartCount();
    getUser();
  }, [cartCount]);

  return (
    <div id="App">
      <BrowserRouter>
        <Header cartCount={cartCount} user={user} disconnect={onDisconnect}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/article" element={<Article addCount={addCount} />} />
          <Route path="/chosenCat" element={<ChosenCat />} />
          {["/men", "/ladies", "/kids"].map((path, index) => (
            <Route key={index} path={path} element={<Gender />} />
          ))}
          {["/men/chosenCat", "/ladies/chosenCat", "/kids/chosenCat"].map(
            (path, index) => (
              <Route key={index} path={path} element={<ChosenCat />} />
            )
          )}
          <Route path="/cart" element={<Cart subCount={subCount}/>} />
          <Route path="/login" element={<Login userInfo={pull_userInfo} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
