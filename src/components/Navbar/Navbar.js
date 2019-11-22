import React, { Component } from "react";
import classes from "../../App.css";
import "../../App.css";
import Aux from "../../hoc/Aux";

import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import MyAccount from "./MyAccount/MyAccount";
import More from "./More/More";
import Cart from "./Cart/Cart";

export default class Navbar extends Component {
  render() {
    return (
      <Aux>
        <div className={classes["navbar-1"]}>
          <div className={classes["navbar-1__margin"]}></div>

          <div className={classes["navbar-1__content"]}>
            <Logo />
            <SearchBar />
            <MyAccount />
            <More />
            <Cart />
          </div>
          <div className={classes["navbar-1__margin1"]}></div>
        </div>
      </Aux>
    );
  }
}
