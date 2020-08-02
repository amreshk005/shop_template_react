import React, { useState } from "react";
import classes from "./Categories.module.css";
import { v4 as uuidv4 } from "uuid";
export default function Categories() {
  const [categories] = useState(["Bags, Wallets & Belts", "Bags & Backpacks", "Laptop Bags"]);

  return (
    <>
      <div className={classes["sidebar__associate__content__2"]}>
        <div className={classes["sidebar__associate__content__2__categories"]}>
          <span>CATEGORIES</span>
        </div>
        {categories.map((igkey) => (
          <div key={uuidv4()} className={classes[`sidebar__associate__content__2__categories${categories.indexOf(igkey) + 1}`]}>
            <div className={classes[`sidebar__associate__content__2__categories${categories.indexOf(igkey) + 1}__items`]}>
              <span>
                <svg className={classes["icon icon-cheveron-left"]} hieght="15px" width="15px" viewBox="0 0 20 15">
                  <use xlinkHref="#icon-cheveron-left"></use>
                  <path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z"></path>
                </svg>
              </span>
              <a href="/#">{igkey}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
