import React from "react";
import classes from "../../App.css";

import Aux from "../../hoc/Aux";
import FirstNavbar from "../FirstNavbar/FirstNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import SideBar from "../SideBar/SideBar";

const layout = props => (
  <Aux>
    <FirstNavbar />
    <SecondNavbar />
    <div className={classes["content"]}>
      <SideBar />
    </div>
  </Aux>
);

export default layout;
