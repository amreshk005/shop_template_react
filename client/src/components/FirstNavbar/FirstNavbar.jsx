import React, { Component } from "react";
import classes from "./FirstNavbar.module.css";
// import "../../App.css";
import Aux from "../../hoc/Aux";

import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import MyAccount from "./MyAccount/MyAccount";
import More from "./More/More";
import Cart from "./Cart/Cart";

export default class FirstNavbar extends Component {
  state = {
    cart: 8,
    MyAccount: "Amresh",
  };
  render() {
    return (
      <Aux>
        <div className={classes["navbar-1"]}>
          <div className={classes["navbar-1__margin"]}></div>

          <div className={classes["navbar-1__content"]}>
            <Logo />
            <SearchBar />
            <MyAccount user={this.state.MyAccount} />
            <More />
            <Cart cart={this.state.cart} />
          </div>
          <div className={classes["navbar-1__margin1"]}></div>
        </div>
      </Aux>
    );
  }
}
