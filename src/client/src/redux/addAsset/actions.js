import ADD_ASSET from "./actionType";
import axios from "../../utils/axiosInterceptor";

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const fetchPostRequest = query => {
  //   console.log("fetch post request is called");
  return {
    type: FETCH_REQUEST,
    query: query || ""
  };
};

const fetchPostSuccess = data => {
  //   console.log("fetch post success action is called");
  return {
    type: FETCH_SUCCESS,
    data
  };
};

const fetchPostFailure = () => {
  //   console.log("fetch post failure action is called");
  return {
    type: FETCH_FAILURE
    // error: error
  };
};

export const addAsset = payload => dispatch => {
  dispatch({
    type: ADD_ASSET,
    payload: {},
    promise: axios.post("<POST_URL>", payload).then(response => {
      //   console.log(payload)
      return response;
    })
  });
};

export {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
};
