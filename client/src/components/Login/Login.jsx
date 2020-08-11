import React, { useState } from "react";
import classes from "./Login.module.css";
import { connect } from "react-redux";
import { fetchAuth } from "../../redux/action/auth";

function Login(props) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  function inputHandler(e) {
    let { name } = e.target;

    setUserInfo({ ...userInfo, [name]: e.target.value });
  }
  console.log(userInfo);
  function submitHandler(e) {
    e.preventDefault();
    props.fetchAuth({ ...userInfo });
  }
  console.log(props.isLoading);
  return (
    <>
      <div className={classes["modal_dialog_coustom"] + " modal-dialog d-flex justify-content-center"}>
        <div className="row m-0 justify-content-around">
          <div className={classes["modal_container_section"] + ""}>
            <div className={classes["modal_container_form"] + " row m-0"}>
              <div className={classes["modal_info"] + " col-5"}>
                <span className={classes["modal_Heading"]}>Login</span>
                <p className={classes["modal_subHeading"]}>
                  <span>Get access to your Orders, Wishlist and Recommendations</span>
                </p>
              </div>
              <div className={classes["modal_form"] + " col-7"}>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className={classes["modal_email"]} aria-describedby="emailHelp" placeholder="Enter email" value={userInfo.email} onChange={inputHandler} />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className={classes["modal_password"]} placeholder="Password" value={userInfo.password} onChange={inputHandler} />
                  </div>
                  <div className={classes["form_button"] + " d-flex flex-column align-items-center"}>
                    <button name="login" type="submit" className={classes["form_login"]} onClick={submitHandler}>
                      Login
                    </button>
                    <span>OR</span>
                    <button type="submit" className={classes["form_otp"]}>
                      Request OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={classes["modal_close"]}>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuth: (payload) => dispatch(fetchAuth(payload)),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
