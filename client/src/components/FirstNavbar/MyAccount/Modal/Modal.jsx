import React from "react";
import classes from "./Modal.module.css";

function Modal() {
  return (
    <>
      <div class="modal fade d-flex justify-content-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="row m-0 mt-5 justify-content-around">
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
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className={classes["modal_email"]} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className={classes["modal_password"]} id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className={classes["form_button"] + " d-flex flex-column align-items-center"}>
                    <button type="submit" className={classes["form_login"]}>
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
            <button type="button" className="close " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
