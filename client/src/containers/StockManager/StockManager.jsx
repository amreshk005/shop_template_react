import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Product from "../../components/Product/Product";

export default class StockManager extends Component {
  render() {
    return (
      <Aux>
        {/* <div>Hello from StockManager</div>
        <div>Hello from StockManager1</div> */}
        <Product />
      </Aux>
    );
  }
}
