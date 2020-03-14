import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import logo from "../images/logo.png";

export const Header = props => {
  return (
    <div className="nav1">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav1">
        <a className="navbar-brand">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <Link to="/home">
          <a className="nav-item nav-link active">Home</a>
        </Link>
        <Link to="/matches">
          <a className="nav-item nav-link">Matches</a>
        </Link>
        <Link to="/results">
          <a className="nav-item nav-link">Results</a>
        </Link>
      </nav>
    </div>
  );
};
