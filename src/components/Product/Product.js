import React from "react";
import ProductInformation from "./ProductInformation/ProductInformation";
import Aux from "../../hoc/Aux";

const product = props => {
  return (
    <Aux>
      <ProductInformation />
      <p>hello from product</p>
    </Aux>
  );
};

export default product;
