import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import StockManager from "./containers/StockManager/StockManager";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Layout />
        <StockManager />
      </div>
    );
  }
}

export default App;
