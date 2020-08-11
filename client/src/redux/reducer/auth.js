import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  isLoading: false,
  authRedirectPath: "/",
};

const authStart = (state, action) => {
  return;
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        isLoading: false,
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path,
      };

    default:
      return state;
  }
};

export default auth;
