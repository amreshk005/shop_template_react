import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS, FETCH_PRODUCT_LIST_FAILURE } from "../actionTypes/actionTypes";

const initStore = {
  isLoading: false,
  query: "",
  data: [],
  error: "",
};

const productList = (state = initStore, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        query: action.query,
      };
    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        isLoading: false,
        data: action.data,
        query: state.query,
        error: state.error,
      };
    case FETCH_PRODUCT_LIST_FAILURE:
      return {
        isLoading: false,
        data: state.data,
        query: state.query,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productList;
