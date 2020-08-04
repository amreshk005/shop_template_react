import React, { useState } from "react";
import classes from "../Filters.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";
import { v4 as uuidv4 } from "uuid";
// import { connect } from "react-redux";
// import { filterHelper } from "../../../HelperComponent/filter";
// import { fetchData } from "../../../../redux/action/action";

export default function CoustomerRatingList() {
  const [coustomerRating] = useState([<span>4 &#9733; & above</span>, <span>3 &#9733; & above</span>, <span>2 &#9733; & above</span>, <span>1 &#9733; & above</span>]);

  // const [coustomerRating, setRating] = useState([]);

  // useEffect(() => {
  //   props.fetchData().then((res) => {
  //     let { data } = res.data;
  //     setRating(Object.keys(filterHelper(data, "rating")));
  //   });
  // }, []);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>CUSTOMER RATINGS</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          {coustomerRating.map((igkey) => (
            <div key={uuidv4()} className={classes["sidebar__associate__content__contentsection__content"]}>
              <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                <label>
                  <input className={classes["inputBox"]} type="checkbox" name="" readOnly value="on" />
                  <div className={classes["divcheckbox"]}></div>
                  <div className={classes["brand"]}>{igkey.props.children}</div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     data: state.data,
//     isLoading: state.isLoading,
//   };
// };
// const mapDisptachToProps = (dispatch) => {
//   return {
//     fetchData: (payload) => dispatch(fetchData(payload)),
//   };
// };

// export default connect(mapStateToProps, mapDisptachToProps)(CoustomerRatingList);
