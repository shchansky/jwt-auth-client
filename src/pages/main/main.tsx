import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Units from "./units";
import { IRootState, useAppDispatch } from "../../store";
import { loginStart } from "../../store/auth/authReducer";
import { logoutUser } from "../../store/auth/actionCreators";

export const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Авторизация прошла успешно</div>
      <button
        onClick={() => {
          dispatch(logoutUser());
          navigate("/");
        }}
      >
        LogOut
      </button>
    </div>
  );

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? renderProfile() : <Units.Login />}
    </div>
  );
};
