import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from "./actionTypes";
import axiosInstance from "../../utils/axiosInterceptor";

export const loginUser = () => ({
  type: LOGIN_USER
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const signupRequest = () => ({
  type: SIGNUP_USER_REQUEST
});

export const signupSuccess = () => ({
  type: SIGNUP_USER_SUCCESS
});

export const signupFailure = () => ({
  type: SIGNUP_USER_FAIL
});

export const signupUser = payload => {
  return dispatch => {
    dispatch(signupRequest());
    return axiosInstance
      .post("/auth/signup", payload)
      .then(() => {
        return dispatch(signupSuccess());
      })
      .catch(() => {
        return dispatch(signupFailure());
      });
  };
};
