import React, { useEffect } from "react";
import classes from "./Products.module.css";
// import Aux from "../../hoc/Aux";
import ProductNavbar from "./ProductNavbar/ProductNavbar";
import ProductsRow from "./ProductsRow/ProductsRow";

function Product() {
  return (
    <div className={classes["main"]}>
      <ProductNavbar />
      <ProductsRow />
    </div>
  );
}

export default Product;
