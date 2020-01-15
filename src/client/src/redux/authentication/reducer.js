import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "./actionTypes";

const initState = {
  isAuth: false,
  authWait: false,
  error: "",
  language: "en"
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, authWait: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        authWait: false,
        language: action.payload.language
      };
    case LOGIN_USER_FAIL:
      return { ...state, authWait: false };

    default:
      return state;
  }
};

export default reducer;
