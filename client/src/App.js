import React, { Component } from "react";
import classes from "./App.css";

import { Route } from "react-router";

import Products from "./components/Products/Products";
import FirstNavbar from "./components/FirstNavbar/FirstNavbar";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className={classes["container"]}>
        <FirstNavbar />
        <SecondNavbar />
        <div className={classes["content"]}>
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/products" exact render={({ history }) => <Products history={history} />} />
          <Route path="/products/:slug" exact render={() => <Products />} />
        </div>
      </div>
    );
  }
}

export default App;
