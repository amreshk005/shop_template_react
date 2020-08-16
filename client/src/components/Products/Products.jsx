import React from "react";
import classes from "./Products.module.css";
import ProductNavbar from "./ProductNavbar/ProductNavbar";
import ProductsRow from "./ProductsRow/ProductsRow";
import SideBar from "../SideBar/sideBar";

function Products(props) {
  // console.log(props);
  return (
    <>
      <SideBar />
      <div className={classes["main"]}>
        <ProductNavbar {...props} />
        <ProductsRow {...props} />
      </div>
    </>
  );
}

export default Products;
