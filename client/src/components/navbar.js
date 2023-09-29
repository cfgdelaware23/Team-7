import React from "react";
import './navbar.css'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="nav-link" to="/">
          <text className="logoWell">well</text>
          <text className="logoFare">fare</text>
        </NavLink>
        <div className="navitems">
          <NavLink className="nav-link" to="/create">
            new transaction
          </NavLink>
        </div>
        <div className="navitems">
          <NavLink className="nav-link" to="/create">
            new user
          </NavLink>
        </div>
      </nav>
    </div>
  )
}