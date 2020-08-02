import React, { useState } from "react";
import classes from "../Filters.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";
import { v4 as uuidv4 } from "uuid";

export default function OfferList() {
  const [offers] = useState(["Bank Offer", "Buy More,Save More", "No Cost EMI", "Special Price"]);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>OFFERS</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          <div className={classes["sidebar__associate__content__contentsection__content"]}>
            {offers?.map((igkey) => {
              return (
                <div key={uuidv4()} className={classes["sidebar__associate__content__contentsection__content"]}>
                  <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                    <label>
                      <input className={classes["inputBox"]} type="checkbox" name="" readOnly value="on" />
                      <div className={classes["divcheckbox"]}></div>
                      <div className={classes["brand"]}>{igkey}</div>
                    </label>
                  </div>
                </div>
              );
            })}

            <div className={classes["sidebar__associate__content__contentsection__more"]}>
              <span>126 More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
