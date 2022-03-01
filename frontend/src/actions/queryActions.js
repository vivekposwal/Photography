import {
  QUERY_CREATE_FAIL,
  QUERY_CREATE_SUCCESS,
  QUERY_CREATE_REQUEST,
} from "../constants/queryConstants";
import axios from "axios";
export const createQueryAction =
  (name, email, DnT, ask) => async (dispatch, getState) => {
    try {
      dispatch({
        type: QUERY_CREATE_REQUEST,
      });
      const { data } = await axios.post(`/api/query/create`, {
        name,
        email,
        DnT,
        ask,
      });
      dispatch({
        type: QUERY_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: QUERY_CREATE_FAIL,
        payload: message,
      });
    }
  };
