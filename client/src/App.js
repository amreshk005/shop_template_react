import React, { Component } from "react";
import classes from "./App.css";

import { Route, Switch } from "react-router";

import Products from "./components/Products/Products";
import FirstNavbar from "./components/FirstNavbar/FirstNavbar";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";

class App extends Component {
  render() {
    return (
      <div className={classes["container"]}>
        <FirstNavbar />
        <SecondNavbar />
        <div className={classes["content"]}>
          <Switch>
            <Route path="/login" exact render={() => <Login />} />
            <Route path="/products" exact render={(props) => <Products {...props} />} />
            <Route path="/products/:slug" exact render={(props) => <Product {...props} />} />
            {/* <Route path="/products/:id" exact render={() => <Product />} /> */}
          </Switch>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
