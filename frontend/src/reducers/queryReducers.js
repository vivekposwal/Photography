import {
  QUERY_CREATE_FAIL,
  QUERY_CREATE_REQUEST,
  QUERY_CREATE_SUCCESS,
} from "../constants/queryConstants";
export const queryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUERY_CREATE_REQUEST:
      return { loading: true };
    case QUERY_CREATE_SUCCESS:
      return { loading: false, success: true };
    case QUERY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
