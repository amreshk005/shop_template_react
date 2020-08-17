import axios from "axios";
import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_LIST_FAILURE } from "../actionTypes/actionTypes";

const fetchGetRequest = (query) => {
  return {
    type: FETCH_PRODUCT_LIST_REQUEST,
    query: query || "",
  };
};

const fetchGetSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    data: data,
  };
};

const fetchGetFailure = (error) => {
  return {
    type: FETCH_PRODUCT_LIST_FAILURE,
    error: error,
  };
};

const fetchData = (query = "") => {
  let url = `https://mighty-castle-96883.herokuapp.com/getAllProducts/${query}`;
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
