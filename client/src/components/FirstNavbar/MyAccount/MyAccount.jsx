import React from "react";
import classes from "./MyAccount.module.css";
import Login from "../../Login/Login";

const MyAccount = (props) => (
  <>
    <div>
      <div className={classes["navbar-1__content__Accountsection"]} data-toggle="modal" data-target="#exampleModal">
        <div className={classes["navbar-1__content__Accountsection__Account"]}>
          <span className={classes["navbar-1__content__Accountsection__Account__myAccount"]}>
            {props.user}
            <svg className={classes["icon icon-cheveron-down"]} width="12" height="auto" viewBox="0 0 15 15" fill="#fff">
              <use xlinkHref="#icon-cheveron-down"></use>
              <path
                d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
      4.242-4.243-4.242-1.414 1.414z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {/* <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Login />
      </div> */}
    </div>
  </>
);

export default MyAccount;
