import React, { useState, useEffect } from "react";
import classes from "../Filters.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { filterHelper } from "../../../HelperComponent/filter";
import { fetchData } from "../../../../redux/action/action";

function CoustomerRatingList(props) {
  const [checkBoxStatus, setCheckBoxStatus] = useState([]);
  const [coustomerRating] = useState([4, 3, 2, 1]);
  // const [brand, setBrand] = useState([]);

  useEffect(() => {
    coustomerRating.forEach((e, index) => {
      setCheckBoxStatus((result) => [...result, { name: e, isChecked: false }]);
    });
  }, []);

  const changeHandler = (e) => {
    // console.log("hello", e.target.name, e.target.checked, checkBoxStatus);
    let newData = checkBoxStatus.map((item, index) => {
      if (String(item.name) === e.target.name) {
        item.isChecked = !item.isChecked;
        props.filterHandler("rating", item.name, item.isChecked);
      }
      return item;
    });
    setCheckBoxStatus(newData);
  };
  console.log(checkBoxStatus.length);

  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>CUSTOMER RATINGS</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          {!checkBoxStatus.length ? (
            <div>Loading....</div>
          ) : (
            coustomerRating.map((igkey, index) => (
              <div key={uuidv4()} className={classes["sidebar__associate__content__contentsection__content"]}>
                <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                  <label>
                    <input name={igkey} className={classes["inputBox"]} type="checkbox" checked={checkBoxStatus[index].isChecked} onChange={changeHandler} />
                    <div className={classes["divcheckbox"]}></div>
                    <div className={classes["brand"]}>
                      <span>{igkey} &#9733; & above</span>
                    </div>
                  </label>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(CoustomerRatingList);
