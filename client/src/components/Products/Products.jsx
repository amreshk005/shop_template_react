import React, { useEffect } from "react";
import classes from "./Products.module.css";
// import Aux from "../../hoc/Aux";
import { connect } from "react-redux";

import ProductsRow from "./ProductsRow/ProductsRow";
import { fetchData } from "../../redux/action/action";

function Product(props) {
  useEffect(() => {
    // console.log("data");
  }, []);
  return (
    <div className={classes["main"]}>
      <div className={classes["propertiessection"]}>
        <div className={classes["propertiessection__property"]}>
          <div className={classes["propertiessection__property__items"]}>
            <div className={classes["propertiessection__property__items__1"]}>
              <div className={classes["propertiessection__property__items__1__Home"]}>
                <a href="/#" className={classes["home"]}>
                  Home
                </a>
                <svg className={classes["icon icon-cheveron-right"]} width="12" height="12" viewBox="0 0 12 16">
                  <use xlinkHref="#icon-cheveron-right"></use>
                  <path d="M12.95 10.707l0.707-0.707-5.657-5.657-1.414 1.414 4.242 4.243-4.242 4.243 1.414 1.414 4.95-4.95z"></path>
                </svg>
              </div>
              <div className={classes["propertiessection__property__items__1__BagsWallet"]}>
                <a href="/#" className={classes["Bags_Back"]}>
                  Bags & Back...
                </a>
                <svg className={classes["icon icon-cheveron-right"]} width="12" height="12" viewBox="0 0 12 16">
                  <use xlinkHref="#icon-cheveron-right"></use>
                  <path d="M12.95 10.707l0.707-0.707-5.657-5.657-1.414 1.414 4.242 4.243-4.242 4.243 1.414 1.414 4.95-4.95z"></path>
                </svg>
              </div>
              <div className={classes["propertiessection__property__items__1__Bags"]}>
                <a href="/#" className={classes["Bags"]}>
                  Bags, Wallets..
                </a>
              </div>
            </div>
            <span className={classes["propertiessection__property__items__2"]}>
              Showing 1 - 40 of 46,179 results for
              <span>"laptops bags"</span>
            </span>
            <div className={classes["propertiessection__property__items__3"]}>
              <span className={classes["sortby"]}>Sort By</span>
              <div className={classes["relevance"]}>Relevance</div>
              <div className={classes["popularity"]}>Popularity</div>
              <div className={classes["low_to_heigh"]}>Price -- Low to High</div>
              <div className={classes["heigh_to_low"]}>Price -- High to Low</div>
              <div className={classes["newest"]}>Newest First</div>
            </div>
          </div>
        </div>
        <div className={classes["propertiessection__location"]}>
          <div className={classes["propertiessection__location__deliverty"]}>Delivering to</div>
          <div className={classes["propertiessection__location__input"]}>
            <svg className={classes["icon icon-location2"]} height="13" width="13" viewBox="0 0 13 17">
              <use xlinkHref="#icon-location2"></use>
              <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"></path>
            </svg>
            <form action="/#" className={classes["propertiessection__location__input__form"]}>
              <input type="text" placeholder="Enter pincode" maxLength="6" className={classes["pincode__input"]} />
            </form>
            <span className={classes["propertiessection__location__input__change"]}>Change</span>
          </div>
        </div>
      </div>
      <ProductsRow />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Product);
