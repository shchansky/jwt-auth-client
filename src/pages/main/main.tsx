import React from "react";
import { useSelector } from "react-redux";
import * as Units from "./units";
import { IRootState } from "../../store";

export const Main = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? <div>Авторизация прошла успешно</div> : <Units.Login />}
    </div>
  );
};
