import * as actionTypes from "../actionTypes/actionTypes";
import axios from "axios";

axios.defaults.withCredentials = true;

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    error: null,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const fetchAuth = (getAuthInput) => {
  console.log("in auth");
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: getAuthInput.email,
      password: getAuthInput.password,
      withCredentials: true,
    };
    console.log(authData);
    let url = "";
    if (!getAuthInput.isSignup) {
      url = "http://localhost:8080/api/users/login";
    }
    axios
      .post(url, authData)
      .then((res) => {
        console.log(res);
        let { user } = res.data.data;
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", user.name);
        // console.log(cookie.get("jwt"));
        dispatch(authSuccess(res.token, user.name));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if(!token){
//             dispatch(logout)
//         }else{

//         }
//     }
// }
