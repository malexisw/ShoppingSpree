import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  var logInfo = {
    prenom: "",
    nom: "",
    date: "",
    email: "",
    password: "",
  };
  const [errorValidate, setErrorValidate] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let validate =
      e.target[0].value &&
      e.target[1].value &&
      e.target[3].value &&
      e.target[4].value
        ? true
        : false;
    if (validate) {
      setErrorValidate(false);
      for (let i = 0; i <= e.target.length; i++) {
        logInfo.firstname = i === 0 ? e.target[i].value : logInfo.firstname;
        logInfo.lastname = i === 1 ? e.target[i].value : logInfo.lastname ;
        logInfo.date = i === 2 ? e.target[i].value : logInfo.date;
        logInfo.email = i === 3 ? e.target[i].value : logInfo.email;
        logInfo.password = i === 4 ? e.target[i].value : logInfo.password;
      }

      localStorage.setItem("logInfo", JSON.stringify(logInfo));
      navigate("/login");
    } else {
      setErrorValidate(true);
    }
  };

  const errorText = () => {
    if (errorValidate) {
      return <b className="error">* One of the mandatory fields is empty. *</b>;
    } else {
      return <></>;
    }
  };

  return (
    <section className="signup">
      <div className="signup-card">
        <h1>Sign Up</h1>
        {errorText()}
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            <p>First Name *</p>
            <input type="text" placeholder="First Name" />
          </label>
          <label>
            <p>Last Name *</p>
            <input type="text" placeholder="Last Name" />
          </label>
          <label>
            <p>Date of Birth</p>
            <input type="date" />
          </label>
          <label>
            <p>Email *</p>
            <input type="email" placeholder="Email@hotmail.com" />
          </label>
          <label>
            <p>Password *</p>
            <input type="password" placeholder="Password" />
          </label>
          <div className="submit">
            <button type="submit">SignUp</button>
          </div>
        </form>
        <br />
        <b className="info-mess">
          * This application is only a programming test, do not use real ID. *
        </b>
      </div>
    </section>
  );
};

export default SignUp;
