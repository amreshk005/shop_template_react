import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from "../actionTypes/actionTypes";

const initStore = {
  isLoading: false,
  query: "",
  data: [],
  error: "",
};

const product = (state = initStore, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        query: action.query,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        data: action.data,
        query: state.query,
        error: state.error,
      };
    case FETCH_PRODUCT_FAILURE:
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

export default product;
