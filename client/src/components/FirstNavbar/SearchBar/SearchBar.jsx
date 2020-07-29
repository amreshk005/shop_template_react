import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => (
  <div className={classes["navbar-1__content__formsection"]}>
    <form action="#" className={classes["navbar-1__content__formsection__form"]}>
      <div className={classes["navbar-1__content__formsection__form__inner"]}>
        <input type="text" className={classes["navbar-1__content__formsection__form__inner__input"]} />
        <button className={classes["navbar-1__content__formsection__form__inner__button"]}>
          <svg className={classes["icon icon-search1"]} height="20px" width="20px" viewBox="0 0 20 20" fill="#2874f0">
            <use xlinkHref="#icon-search1"></use>
            <path d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z"></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
);

export default SearchBar;
