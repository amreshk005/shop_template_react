import React from "react";
import classes from "./downArrow.module.css";

export default function DownArrow() {
  return (
    <>
      <svg className={classes["icon icon-cheveron-down"]} width="15" height="auto" viewBox="0 0 16 16">
        <use xlinkHref="#icon-cheveron-down"></use>
        <path
          d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
        ></path>
      </svg>
    </>
  );
}
