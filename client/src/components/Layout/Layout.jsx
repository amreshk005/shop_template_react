import React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
import FirstNavbar from "../FirstNavbar/FirstNavbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import SideBar from "../SideBar/sideBar";
import Products from "../Products/Products";

function Layout(props) {
  // const [query, setquery] = useState('?')
  console.log("history", props);
  return (
    <Aux>
      <FirstNavbar />
      <SecondNavbar />
      <div className={classes["content"]}>
        <SideBar history={props.history} />
        <Products />
      </div>
    </Aux>
  );
}

export default Layout;
