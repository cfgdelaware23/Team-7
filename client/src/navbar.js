import React from "react";
import './navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bar">
      <div className="bar-container">
      <div className="navlogo">
        <NavLink className="nav-link" to="/">
          <text className="logoWell">well</text>
          <text className="logoFare">fare</text>
        </NavLink>
        </div>
        <div className="navitems">
          <NavLink className="nav-link" to="/">
            new transaction
          </NavLink>
          <NavLink className="nav-link" to="/formPage">
            new user
          </NavLink>
        </div>
        </div>
    </div>
  )
}