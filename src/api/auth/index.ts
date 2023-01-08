import { AxiosPromise } from "axios";
import EndPoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginRequest, ILoginResponse } from "./auth.types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(EndPoints.AUTH.LOGIN, params);

export const logout = (): AxiosPromise =>
  axiosInstance.get(EndPoints.AUTH.LOGOUT);

export const getProfile = (): AxiosPromise<string> =>
  axiosInstance.get(EndPoints.AUTH.PROFILE);
