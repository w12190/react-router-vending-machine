import React from "react";

import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {

  const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "limegreen",
  }

  return (
    <nav className="NavBar">
      <NavLink exact to="/" activeStyle={ ACTIVE_STYLES }>
        Home
      </NavLink>

      <NavLink exact to="/hotcheetos" activeStyle={ACTIVE_STYLES}>
        HotCheetos
      </NavLink>

      <NavLink exact to="/mountaindew" activeStyle={ACTIVE_STYLES}>
        MountainDew
      </NavLink>

      <NavLink exact to="/ramen" activeStyle={ACTIVE_STYLES}> 
        Ramen
      </NavLink>
    </nav>
  )
}

export default NavBar;