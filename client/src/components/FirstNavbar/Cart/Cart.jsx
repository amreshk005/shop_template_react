import React from "react";
import classes from "./Cart.module.css";

import CartIcon from "../../HelperComponent/svgIcon/cartIcon/cartIcon";

const Cart = (props) => {
  return (
    <div className={classes["navbar-1__content__MyCartSection"]}>
      <div className={classes["navbar-1__content__MyCartSection__Cart"]}>
        <span className={classes["navbar-1__content__MyCartSection__Cart__myCart"]}>
          MyCart
          <span className={classes["navbar-1__content__MyCartSection__Cart__myCart__icon"]}>
            <CartIcon />
            <div className={classes["navbar-1__content__MyCartSection__Cart__myCart__icon__notifications"]}>{props.cart}</div>
          </span>
        </span>
      </div>
    </div>
  );
};
export default Cart;
