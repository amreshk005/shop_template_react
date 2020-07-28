import React from "react";
import classes from "../../../App.css";

const MyAccount = props => (
  <div className={classes["navbar-1__content__Accountsection"]}>
    <div className={classes["navbar-1__content__Accountsection__Account"]}>
      <span className={classes["navbar-1__content__Accountsection__Account__myAccount"]}>
        {props.user}
        <svg className={classes["icon icon-cheveron-down"]} width="9" height="20" viewBox="5 3 10 1" fill="#fff">
          <use xlinkHref="#icon-cheveron-down"></use>
          <path
            d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
      4.242-4.243-4.242-1.414 1.414z"
          ></path>
        </svg>
      </span>
    </div>
  </div>
);

export default MyAccount;
