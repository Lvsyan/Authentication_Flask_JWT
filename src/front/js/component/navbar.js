import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      {store.logged != null ? (
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Home</span>
          </Link>
          {store.logged == true ? (
            <Link to="/private">
              <button className="btn btn-primary">Private</button>
            </Link>
          ) : null}
          <div className="ml-auto">
            {store.logged == true ? (
              <Link
                to="/"
                onClick={() => {
                  actions.logout();
                }}
              >
                <button className="btn btn-primary">Logout</button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="me-3">
                  <button className="btn btn-primary">Login</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-primary">Register</button>
                </Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
};
