import React from "react";
import classes from "./More.module.css";

const More = () => (
  <div className={classes["navbar-1__content__MoreSection"]}>
    <div className={classes["navbar-1__content__MoreSection__More"]}>
      <span className={classes["navbar-1__content__MoreSection__More__myMore"]}>
        More
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

export default More;
