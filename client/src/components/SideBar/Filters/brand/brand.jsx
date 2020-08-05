import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Svgicon from "../../../HelperComponent/svgIcon/downArrow/downArrow";
import classes from "../Filters.module.css";
import { fetchData } from "../../../../redux/action/action";
import { v4 as uuidv4 } from "uuid";
import { filterHelper } from "../../../HelperComponent/filter";

function Brand(props) {
  const [checkBoxStatus, setCheckBoxStatus] = useState([]);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    props
      .fetchData()
      .then((res) => {
        let { data } = res.data;
        let arr = filterHelper(data, "brand");
        arr.forEach((e, index) => {
          setCheckBoxStatus((result) => [...result, { name: e, isChecked: false }]);
        });
        setBrand(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandler = (e) => {
    // console.log("hello", e.target.name, e.target.checked, checkBoxStatus);
    let newData = checkBoxStatus.map((item, index) => {
      if (item.name === e.target.name) {
        item.isChecked = !item.isChecked;
        props.filterHandler("brand", item.name, item.isChecked);
      }
      return item;
    });
    setCheckBoxStatus(newData);
  };
  // console.log("rendered")
  return (
    <>
      {" "}
      <div className={classes["sidebar__associate__content"]}>
        <div className={classes["sidebar__associate__content__titlesection"]}>
          <div className={classes["sidebar__associate__content__titlesection__title"]}>Brand</div>
          <Svgicon />
        </div>
        <div className={classes["sidebar__associate__content__contentsection"]}>
          <div className={classes["sidebar__associate__content__contentsection__content"]}>
            <div className={classes["sidebar__associate__content__contentsection__content_inputsection"]}>
              <svg className={classes["icon icon-search1"]} height="15" width="15" viewBox="0 0 17 18">
                <use xlinkHref="#icon-search1"></use>
                <path d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z"></path>
              </svg>

              <input type="text" className={classes["sidebar__associate__content__contentsection__content__input"]} placeholder="Search Brand" />
            </div>
            <div className={classes["sidebar__associate__content__contentsection"]}>
              {!brand.length ? (
                <div>Loading....</div>
              ) : (
                brand?.map((igkey, index) => (
                  <div key={uuidv4()} className={classes["sidebar__associate__content__contentsection__content"]}>
                    <div className={classes["sidebar__associate__content__contentsection__content__brandsection"]}>
                      <label>
                        <input name={igkey} className={classes["inputBox"]} checked={checkBoxStatus[index].isChecked} type="checkbox" onChange={changeHandler} />
                        <div className={classes["divcheckbox"]}></div>
                        <div className={classes["brand"]}>{igkey}</div>
                      </label>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* <div className={classes["sidebar__associate__content__contentsection__more"]}>
            <span>1790 More</span>
          </div> */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    query: state.query,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Brand);
// export default Brand;
