import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./sideBar.module.css";

import PriceMap from "./Filters/priceMap/priceMap";
import Categories from "./Filters/categories/Categories";
import Brand from "./Filters/brand/brand";
import CoustmerRating from "./Filters/coustomerRatingList/CoustomerRatingList";
import Discount from "./Filters/discountList/DiscountList";
import Size from "./Filters/sizeList/SizeList";
import Offer from "./Filters/offerList/OfferList";

export default class SideBar extends Component {
  state = {};

  render() {
    return (
      <Aux>
        <div className={classes["sidebar"]}>
          <div className={classes["sidebar__associate"]}>
            <div className={classes["sidebar__associate__content"]}>
              <div className={classes["sidebar__associate__content__1"]}>
                <span className={classes["sidebar__associate__content__1__filters"]}>Filters</span>
              </div>
              <Categories />
              <PriceMap />
              <div className={classes["sidebar__associate__content__4"]}>
                <div className={classes["sidebar__associate__content__4__assuredsection"]}>
                  <label>
                    <input className={classes["inputBox"]} type="checkbox" name="" readOnly value="on" />
                    <div className={classes["inputBox1"]}></div>
                    <div className={classes["assuredlogo"]}>
                      <img height="21" src="/assets/images/fa_8b4b59.png" alt="assuredlogo" />
                    </div>
                  </label>
                </div>
                <div className={classes["sidebar__associate__content__4__help"]}>
                  <span className={classes["sidebar__associate__content__4__help__question"]}>?</span>
                </div>
              </div>
              <Brand />
              <CoustmerRating />
              <Discount />
              <Size />
              {/* <Compartment /> */}
              {/* <Material/> */}
              {/* <Theme/> */}
              <Offer />
              <Discount />
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}
