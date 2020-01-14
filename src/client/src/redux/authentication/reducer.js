import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from "./actionTypes";

const initState = {
  isAuth: false,
  signupWait: false,
  language: "en"
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { isAuth: true };
    case LOGOUT_USER:
      return { isAuth: false };
    case SIGNUP_USER_REQUEST:
      return { ...state, signupWait: true };
    case SIGNUP_USER_SUCCESS:
      return { ...state, signupWait: false };
    case SIGNUP_USER_FAIL:
      return { ...state, signupWait: false };

    default:
      return state;
  }
};

export default reducer;
