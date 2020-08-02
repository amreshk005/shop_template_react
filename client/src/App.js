import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes["container"]}>
        <Layout />
      </div>
    );
  }
}

export default App;
