import React, { Component } from "react";
import classes from "../../App.css";
import Aux from "../../hoc/Aux";

export default class SecondNavbar extends Component {
  render() {
    return (
      <Aux>
        <div className={classes["navbar-2"]}>
          <ul className={classes["navbar-2__menu"]}>
            <li className={classes["navbar-2__menu__1"]}>
              <span className={classes["navbar-2__menu__1__svg"]}>
                Electronics
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>

            <li className={classes["navbar-2__menu__2"]}>
              <span className={classes["navbar-2__menu__2__svg"]}>
                TV & Appliances
                <svg
                  className="icon icon-cheveron-down"
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className={classes["navbar-2__menu__3"]}>
              <span className={classes["navbar-2__menu__3__svg"]}>
                Men
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className={classes["navbar-2__menu__4"]}>
              <span className={classes["navbar-2__menu__4__svg"]}>
                Women
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className={classes["navbar-2__menu__5"]}>
              <span className={classes["navbar-2__menu__5__svg"]}>
                Baby & Kids
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className={classes["navbar-2__menu__6"]}>
              <span className={classes["navbar-2__menu__6__svg"]}>
                Home & Furniture
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className={classes["navbar-2__menu__7"]}>
              <span className={classes["navbar-2__menu__7__svg"]}>
                Home & Furniture
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className={classes["navbar-2__menu__8"]}>
              <span className={classes["navbar-2__menu__8__svg"]}>
                Home & Furniture
                <svg
                  className={classes["icon icon-cheveron-down"]}
                  width="9"
                  height="20"
                  viewBox="5 3 10 1"
                >
                  <use xlinkHref="#icon-cheveron-down"></use>
                  <path
                    d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                  4.242-4.243-4.242-1.414 1.414z"
                  ></path>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </Aux>
    );
  }
}
