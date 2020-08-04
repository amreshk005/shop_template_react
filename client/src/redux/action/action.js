import axios from "axios";
import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_LIST_FAILURE } from "../actionTypes/actionTypes";

const fetchPostRequest = (query) => {
  return {
    type: FETCH_PRODUCT_LIST_REQUEST,
    query: query || ''
  };
};

const fetchPostSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    data: data,
  };
};

const fetchPostFailure = (error) => {
  return {
    type: FETCH_PRODUCT_LIST_FAILURE,
    error: error,
  };
};

const fetchData = (query='') => {
  console.log(query)
  return async (dispatch) => {
    dispatch(fetchPostRequest(query));
    return await axios
      .get(`http://localhost:8080/getAllProducts/?${query}`)
      .then((res) => {
        // console.log(res.data);
        return dispatch(fetchPostSuccess(res.data));
      })
      .catch((err) => dispatch(fetchPostFailure(err)));
  };
};

export { fetchData, fetchPostFailure, fetchPostRequest, fetchPostSuccess };
