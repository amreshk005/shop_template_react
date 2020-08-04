import React, {useState} from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
import FirstNavbar from "../FirstNavbar/FirstNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import SideBar from "../SideBar/sideBar";
import Products from "../Products/Products";

function Layout(props){
  // const [query, setquery] = useState('?')

  return (

  <Aux>
    <FirstNavbar />
    <SecondNavbar />
    <div className={classes["content"]}>
      <SideBar />
      <Products />
    </div>
  </Aux>
  )
};

export default Layout;
