import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor";

export const loginUserRequest = payload => ({
  type: LOGIN_USER_REQUEST,
  payload
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFail = () => ({
  type: LOGIN_USER_FAIL
});

export const loginUser = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("/auth/login", payload)
      .then(res => {
        localStorage.setItem("akira-auth-token", res.token);
        loginUserSuccess(res);
      })
      .catch(() => loginUserFail());
  };
};
