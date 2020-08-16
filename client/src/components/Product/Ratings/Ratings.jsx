import React from "react";
import classes from "./Ratings.module.css";
import RatingComp from "../RatingComp/RatingComp";
import { v4 as uuidv4 } from "uuid";

function Ratings() {
  return (
    <div className="row flex-column">
      <div className={classes["rating_header_section"] + " row align-items-center m-0 flex-nowrap justify-content-between"}>
        <div className={classes["rating_header"]}>Ratings & Reviews</div>
        <RatingComp />
      </div>
      <div className={classes["details_review_header"]}>Images uploaded by customers:</div>
      <div className="row flex-column" style={{ margin: "-4px 0 16px 24px" }}>
        {[1, 2, 3, 4, 5, 6, 7].map((e) => (
          <div key={uuidv4()} className="row mt-3 border-top p-2">
            <div className={classes["review_rating"]}>
              <span>4.3</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                className={classes["review_star"]}
              ></img>
            </div>
            <div className={classes["review_detail"]}>
              This skybag is good and it is light weight .<br /> colour is good .polyster Its better use for me..product is good..
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ratings;
