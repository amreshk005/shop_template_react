import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import classes from "./App.css";
import { Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className={classes["container"]}>
        <Route path="/products" exact render={({ history }) => <Layout history={history} />} />
        <Route path="/products/:slug" exact render={() => <Layout />} />
      </div>
    );
  }
}

export default App;
