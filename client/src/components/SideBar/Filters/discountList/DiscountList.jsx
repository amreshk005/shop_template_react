import React, { useState } from "react";
import classes from "../Filters.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";

export default function DiscountList() {
  const [discount] = useState(["70% or more", "60% or more", "50% or more", "40% or more", "30% or more", "20% or more", "10% or more"]);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>DISCOUNT</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          <div className={classes["sidebar__associate__content__contentsection__content"]}>
            {discount?.map((igkey) => {
              return (
                <div className={classes["sidebar__associate__content__contentsection__content"]}>
                  <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                    <label>
                      <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
                      <div className={classes["divcheckbox"]}></div>
                      <div className={classes["brand"]}>{igkey}</div>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
