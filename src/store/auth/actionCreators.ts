import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import { ILoginRequest, ILoginResponse } from "../../api/auth/auth.types";
import {
  loginStart,
  loginSucess,
  loginFailure,
  logoutSuccess,
  loadProfileStart,
  loadProfileFailure,
  loadProfileSucess,
} from "./authReducer";
import { store } from "..";
import { AxiosPromise } from "axios";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);

      dispatch(loginSucess(res.data.accessToken));
      dispatch(getProfile());
    } catch (e: any) {
      console.error(e);

      dispatch(loginFailure(e.message));
    }
  };

export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      await api.auth.logout();

      dispatch(logoutSuccess());
    } catch (e) {
      console.error(e);
    }
  };

export const getProfile =
  () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart());

      const res = await api.auth.getProfile();

      dispatch(loadProfileSucess(res.data));
    } catch (e: any) {
      console.error(e);

      dispatch(loadProfileFailure(e.message));
    }
  };

export const getAccessToken =
  () =>
  (dispatch: Dispatch<any>): string | null => {
    try {
      const accessToken = store.getState().auth.authData.accessToken;

      console.log("accessToken", accessToken);

      return accessToken;
    } catch (e) {
      console.error(e);

      return null;
    }
  };
