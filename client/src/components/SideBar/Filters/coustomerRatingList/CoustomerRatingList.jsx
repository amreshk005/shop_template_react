import React, { useState } from "react";
import classes from "../Filters.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";

export default function CoustomerRatingList() {
  const [coustomerRating] = useState([<span>4 &#9733; & above</span>, <span>3 &#9733; & above</span>, <span>2 &#9733; & above</span>, <span>1 &#9733; & above</span>]);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>CUSTOMER RATINGS</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          <div className={classes["sidebar__associate__content__contentsection__content"]}>
            {coustomerRating.map((igkey) => (
              <div className={classes["sidebar__associate__content__contentsection__content"]}>
                <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                  <label>
                    <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
                    <div className={classes["divcheckbox"]}></div>
                    <div className={classes["brand"]}>{igkey.props.children}</div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
