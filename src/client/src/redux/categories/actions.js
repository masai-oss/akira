import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL
} from "./actionTypes";

import axios from "../../utils/axiosInterceptor";

const addCategoryRequest = () => ({
  type: ADD_CATEGORY_REQUEST
});

const addCategorySuccess = () => ({
  type: ADD_CATEGORY_SUCCESS
});

const addCategoryFail = () => ({
  type: ADD_CATEGORY_FAIL
});

const deleteCategoryRequest = () => ({
  type: DELETE_CATEGORY_REQUEST
});

const deleteCategorySuccess = () => ({
  type: DELETE_CATEGORY_SUCCESS
});

const deleteCategoryFail = () => ({
  type: DELETE_CATEGORY_FAIL
});

export const addCategory = payload => {
  return dispatch => {
    dispatch(addCategoryRequest());
    return axios
      .post("/categories", payload)
      .then(() => dispatch(addCategorySuccess()))
      .catch(() => dispatch(addCategoryFail()));
  };
};

export const deleteCategory = payload => {
  return dispatch => {
    dispatch(deleteCategoryRequest());
    return axios({
      url: "/categories",
      method: "DELETE",
      data: payload
    })
      .then(() => dispatch(deleteCategorySuccess()))
      .catch(() => dispatch(deleteCategoryFail()));
  };
};
