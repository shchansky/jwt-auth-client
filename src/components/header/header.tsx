import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <ul style={{ padding: "0px", display: "flex", gap: "8px" }}>
        <li style={{ listStyle: "none" }}>
          <NavLink to="/">Main</NavLink>
        </li>
        <li style={{ listStyle: "none" }}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};
