import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Private = () => {
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
      setUser(data.user);
    } else {
      history.push("/login");
    }
  };

  return (
    <div>
      <h1>Private Page</h1>
      <h2>{user.email}</h2>
    </div>
  );
};
