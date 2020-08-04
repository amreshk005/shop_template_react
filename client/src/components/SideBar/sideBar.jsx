import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";
import classes from "./sideBar.module.css";

import PriceMap from "./Filters/priceMap/priceMap";
import Categories from "./Filters/categories/Categories";
import Brand from "./Filters/brand/brand";
import CoustmerRating from "./Filters/coustomerRatingList/CoustomerRatingList";
import Discount from "./Filters/discountList/DiscountList";
// import Size from "./Filters/sizeList/SizeList";
// import Offer from "./Filters/offerList/OfferList";
import { fetchData } from "../../redux/action/action";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: [],
    };
  }

  filterHandler = (getQuery,itemChecked) => {
    let {query} = this.state
    let newQuery 
    if(itemChecked == true){
      newQuery = [...query, getQuery]
      this.setState({
        query: newQuery
      })
    }else{
      newQuery = query.filter(e => e !==  getQuery)
      this.setState({
        query: newQuery
      })
    }
    let queryStr = ''
    newQuery.forEach(item => {
      queryStr = !queryStr.length?`brand=${item}`:`${queryStr}&brand=${item}`
    })
    console.log(queryStr)
    this.props.fetchData(queryStr)
  }
  render() {
    return (
      <Aux>
        <div className={classes["sidebar"]}>
          <div className={classes["sidebar__associate"]}>
            <div className={classes["sidebar__associate__content"]}>
              <div className={classes["sidebar__associate__content__1"]}>
                <span className={classes["sidebar__associate__content__1__filters"]}>Filters</span>
              </div>
              <Categories />
              <PriceMap />
              <div className={classes["sidebar__associate__content__4"]}>
                <div className={classes["sidebar__associate__content__4__assuredsection"]}>
                  <label>
                    <input className={classes["inputBox"]} type="checkbox" name="" readOnly value="on" />
                    <div className={classes["inputBox1"]}></div>
                    <div className={classes["assuredlogo"]}>
                      <img height="21" src="/assets/images/fa_8b4b59.png" alt="assuredlogo" />
                    </div>
                  </label>
                </div>
                <div className={classes["sidebar__associate__content__4__help"]}>
                  <span className={classes["sidebar__associate__content__4__help__question"]}>?</span>
                </div>
              </div>
              <Brand filterHandler={this.filterHandler} />
              <CoustmerRating />
              <Discount />
              {/* <Size data={data} /> */}
              {/* <Compartment /> */}
              {/* <Material/> */}
              {/* <Theme/> */}
              {/* <Offer data={data} /> */}
              {/* <Discount data={data} /> */}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(SideBar);
