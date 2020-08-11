import React from "react";
import classes from "./Products.module.css";
import ProductNavbar from "./ProductNavbar/ProductNavbar";
import ProductsRow from "./ProductsRow/ProductsRow";
import SideBar from "../SideBar/sideBar";

function Product(props) {
  return (
    <>
      <SideBar history={props.history} />
      <div className={classes["main"]}>
        <ProductNavbar />
        <ProductsRow />
      </div>
    </>
  );
}

export default Product;
