// import { ADD_ASSET } from "./actionType";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actions";

const initStore = {};

const reducer = (state = initStore, action) => {
  //   console.log("reducer called");
  switch (action.type) {
    case FETCH_REQUEST:
      //   console.log("fetch request called");
      return {
        ...state
      };
    case FETCH_SUCCESS:
      //   console.log("fetch success called", action);
      return {
        ...state
      };
    case FETCH_FAILURE:
      //   console.log("fetch failure called");
      return {
        ...state
      };
    // case ADD_ASSET:

    // //   console.log(action.payload, "this is the payload of redux");

    default:
      //   console.log("reducer default called");
      return state;
  }
};

export default reducer;
