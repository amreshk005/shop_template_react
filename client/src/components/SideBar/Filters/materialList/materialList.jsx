import React, { useState } from "react";

export default function MaterialList() {
  const [material] = useState(["leather", "cotton", "mixedcotton", "fibre"]);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>MATERIAL</div>
          <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
            <use xlinkHref="#icon-cheveron-up"></use>
            <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z"></path>
          </svg>
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          <div className={classes["sidebar__associate__content__contentsection__content"]}>
            {material?.map((igkey) => {
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
            <div className={classes["sidebar__associate__content__5__contentsection__more"]}>
              <span>126 More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
