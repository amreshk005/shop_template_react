import React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
import FirstNavbar from "../FirstNavbar/FirstNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import SideBar from "../SideBar/sideBar";

const Layout = (props) => (
  <Aux>
    <FirstNavbar />
    <SecondNavbar />
    <div className={classes["content"]}>
      <SideBar />
    </div>
  </Aux>
);

export default Layout;
