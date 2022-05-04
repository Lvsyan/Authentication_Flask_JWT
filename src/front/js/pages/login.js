import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    privateInfo();
  }, []);

  const privateInfo = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-xywfzrlnq5x.ws-eu43.gitpod.io/api/private",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("x"),
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      history.push("/private");
    }
  };

  const sendUserInfo = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-xywfzrlnq5x.ws-eu43.gitpod.io/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("x", data.token);
      history.push("/private");
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <label htmlFor="email" className="col-1">
          Email
        </label>
        <input
          id="email"
          className="col-3"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password" className="col-1">
          Password
        </label>
        <input
          id="password"
          className="col-3"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button className="col-2 offset-1" onClick={() => sendUserInfo()}>
          Login user
        </button>
      </div>
    </div>
  );
};
