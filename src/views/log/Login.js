import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = (props) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var retrievedInfo = JSON.parse(localStorage.getItem("logInfo"));

    if (
      retrievedInfo.email !== e.target[0].value ||
      retrievedInfo.password !== e.target[1].value
    ) {
      setError("* Error in your mail or password. *");
    } else {
      props.userInfo(retrievedInfo);
      navigate("/");
    }
  };

  return (
    <section className="login">
      <div className="login-card">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Mail adress</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
          <b className="info-mess">{error}</b>
      </div>
    </section>
  );
};

export default Login;
