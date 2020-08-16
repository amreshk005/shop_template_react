import axios from "axios";
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from "../actionTypes/actionTypes";

const fetchGetRequest = (query) => {
  return {
    type: FETCH_PRODUCT_REQUEST,
    query: query || "",
  };
};

const fetchGetSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    data: data,
  };
};

const fetchGetFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    error: error,
  };
};

const fetchData = (query = "") => {
  let url = `http://localhost:8080/getProduct/${query}`;
  console.log(url);
  return async (dispatch) => {
    dispatch(fetchGetRequest(query));
    return await axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        return dispatch(fetchGetSuccess(res.data));
      })
      .catch((err) => dispatch(fetchGetFailure(err)));
  };
};

export { fetchData, fetchGetRequest, fetchGetSuccess, fetchGetFailure };
