import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Units from "./units";
import { IRootState, useAppDispatch } from "../../store";
import { logoutUser, getProfile } from "../../store/auth/actionCreators";

export const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );

  console.log("profile", profile);

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Авторизация прошла успешно, {profile}</div>
      <button
        onClick={() => {
          dispatch(logoutUser());
          navigate("/");
        }}
      >
        LogOut
      </button>

      <button
        onClick={() => {
          dispatch(getProfile());
        }}
      >
        update Proofile
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
