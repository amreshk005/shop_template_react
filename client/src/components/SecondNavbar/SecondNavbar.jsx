import React, { Component } from "react";
import classes from "./SecondNavbar.module.css";
import Aux from "../../hoc/Aux";

import DownArrowSvg from "../HelperComponent/svgIcon/downArrow/downArrow";

export default class SecondNavbar extends Component {
  render() {
    return (
      <Aux>
        <div className={classes["navbar-2"]}>
          <ul className={classes["navbar-2__menu"]}>
            <li className={classes["navbar-2__menu__1"]}>
              <span className={classes["navbar-2__menu__1__svg"]}>
                Electronics
                <DownArrowSvg />
              </span>
            </li>

            <li className={classes["navbar-2__menu__2"]}>
              <span className={classes["navbar-2__menu__2__svg"]}>
                TV & Appliances
                <DownArrowSvg />
              </span>
            </li>
            <li className={classes["navbar-2__menu__3"]}>
              <span className={classes["navbar-2__menu__3__svg"]}>
                Men
                <DownArrowSvg />
              </span>
            </li>
            <li className={classes["navbar-2__menu__4"]}>
              <span className={classes["navbar-2__menu__4__svg"]}>
                Women
                <DownArrowSvg />
              </span>
            </li>
            <li className={classes["navbar-2__menu__5"]}>
              <span className={classes["navbar-2__menu__5__svg"]}>
                Baby & Kids
                <DownArrowSvg />
              </span>
            </li>
            <li className={classes["navbar-2__menu__6"]}>
              <span className={classes["navbar-2__menu__6__svg"]}>
                Home & Furniture
                <DownArrowSvg />
              </span>
            </li>
            <li className={classes["navbar-2__menu__7"]}>
              <span className={classes["navbar-2__menu__7__svg"]}>
                Home & Furniture
                <DownArrowSvg />
              </span>
            </li>
            <li className={classes["navbar-2__menu__8"]}>
              <span className={classes["navbar-2__menu__8__svg"]}>
                Home & Furniture
                <DownArrowSvg />
              </span>
            </li>
          </ul>
        </div>
      </Aux>
    );
  }
}
