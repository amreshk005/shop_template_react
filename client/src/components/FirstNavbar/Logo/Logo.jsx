import React from "react";
import classes from "./Logo.module.css";

const logo = () => (
  <div className={classes["navbar-1__content__logosection"]}>
    <img className={classes["navbar-1__content__logosection__logo"]} src="/assets/images/filp_logo.png" alt="filp_logo" />
  </div>
);

export default logo;
