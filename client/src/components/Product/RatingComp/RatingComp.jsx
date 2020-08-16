import React from "react";
import classes from "./RatingComp.module.css";

function RatingComp() {
  return (
    <>
      <div className={classes["product_rating_section"]}>
        <span className={classes["product_rating"]}>
          4.3
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
            className={classes["product_star"]}
          />
        </span>
        <span className={classes["product_reviews"]}>10,835 ratings and 1,300 reviews</span>
      </div>
    </>
  );
}

export default RatingComp;
