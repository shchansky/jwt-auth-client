import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

export const Header = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
    <nav>
      <ul style={{ padding: "0px", display: "flex", gap: "8px" }}>
        <li style={{ listStyle: "none" }}>
          <NavLink to="/">Main</NavLink>
        </li>
        {isLoggedIn && (
          <li style={{ listStyle: "none" }}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
