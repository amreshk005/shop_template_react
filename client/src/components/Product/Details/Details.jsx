import React from "react";
import classes from "./Details.module.css";
import RatingComp from "../RatingComp/RatingComp";

export default function Details() {
  return (
    <div>
      <div className={classes["product_info"] + " col"}>
        <h1 className={classes["product_heading"]}>
          <span className={classes["product_brand"]}>Wildcraft</span>
          <span className={classes["product_name"]}>Majestic_Mel 30 L Laptop Backpack (Blue)</span>
        </h1>
        <div className={classes["product_price"]}>
          <div className={classes["product_price_current"]}>₹1,239</div>
          <div className={classes["product_price_original"]}>₹2,099</div>
          <div className={classes["product_price_off"]}>40% off</div>
        </div>
        <RatingComp />
        <div className={["product_services"] + " col-8 mt-4 pl-0"}>
          <div className={classes["product_services_heading"] + " col-3 p-0"}>Services</div>
          <div className={classes["product_services_detail"] + " col-9 pl-0"}>
            <ul>
              <li>
                <div className={classes["secure_icon"] + " " + classes["service_icon"]}></div>
                <div className={classes["icon_details"]}>This is a genuine Wildcraft product. The product comes with a standard warranty of 18 months.</div>
              </li>
              <li>
                <div className={classes["return_icon"] + " " + classes["service_icon"]}></div>
                <div className={classes["icon_details"]}>14 Days Return Policy</div>
              </li>
              <li>
                <div className={classes["payment_icon"] + " " + classes["service_icon"]}></div>
                <div className={classes["icon_details"]}>Cash on Delivery available</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
