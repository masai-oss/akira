import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL
} from "./actionTypes";

const initState = {
  requestWait: false,
  message: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return { ...state, requestWait: true };
    case ADD_CATEGORY_SUCCESS:
      return { ...state, message: action.payload, requestWait: false };
    case ADD_CATEGORY_FAIL:
      return { ...state, message: action.payload, requestWait: false };
    case DELETE_CATEGORY_REQUEST:
      return { ...state, requestWait: true };
    case DELETE_CATEGORY_SUCCESS:
      return { ...state, message: action.payload, requestWait: false };
    case DELETE_CATEGORY_FAIL:
      return { ...state, message: action.payload, requestWait: false };
    default:
      return state;
  }
};

export default reducer;
