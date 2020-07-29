import React, { useState } from "react";
import classes from "./compatmentsList.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";

export default function compatmentsList() {
  const [compartments] = useState(["1", "2", "3 or more"]);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>NUMBER OF COMPARTMENTS</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          <div className={classes["sidebar__associate__content__contentsection__content"]}>
            {compartments.map((igkey) => {
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
