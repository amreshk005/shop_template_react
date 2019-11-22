import React from "react";
import classes from "../../../App.css";

const logo = () => (
  <div className={classes["navbar-1__content__logosection"]}>
    <img
      className={classes["navbar-1__content__logosection__logo"]}
      src={require("../../../assets/images/filp_logo.png")}
      alt="filp_logo"
    />
  </div>
);

export default logo;
