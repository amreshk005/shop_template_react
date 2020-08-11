import React, { useState, useEffect } from "react";
import classes from "../Filters.module.css";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { fetchData } from "../../../../redux/action/products";

function DiscountList(props) {
  const [checkBoxStatus, setCheckBoxStatus] = useState([]);
  const [discount] = useState([70, 60, 50, 40, 30, 20, 10]);

  // const [brand, setBrand] = useState([]);

  useEffect(() => {
    discount.forEach((e) => {
      setCheckBoxStatus((result) => [...result, { name: e, isChecked: false }]);
    });
  }, []);

  const changeHandler = (e) => {
    // console.log("hello", e.target.name, e.target.checked, checkBoxStatus);
    let newData = checkBoxStatus.map((item, index) => {
      if (String(item.name) === e.target.name) {
        item.isChecked = !item.isChecked;
        props.filterHandler("discount", item.name, item.isChecked);
      }
      return item;
    });
    setCheckBoxStatus(newData);
  };
  return (
    <>
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>DISCOUNT</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          {!checkBoxStatus.length ? (
            <div>Loading....</div>
          ) : (
            discount.map((igkey, index) => {
              return (
                <div key={uuidv4()} className={classes["sidebar__associate__content__contentsection__content"]}>
                  <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                    <label>
                      <input name={igkey} className={classes["inputBox"]} type="checkbox" checked={checkBoxStatus[index].isChecked} onChange={changeHandler} />
                      <div className={classes["divcheckbox"]}></div>
                      <div className={classes["brand"]}>{igkey}% or more</div>
                    </label>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.products.data,
    isLoading: state.products.isLoading,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(DiscountList);
