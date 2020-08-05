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
      query: {
        brand: [],
        rating: [],
        discount: [],
      },
    };
  }

  filterHandler = (filterType, getQuery, itemChecked) => {
    let queryState = this.state.query[filterType];
    let newQuery;
    if (itemChecked === true) {
      newQuery = [...queryState, getQuery];
      this.setState({
        query: {
          ...this.state.query,
          [filterType]: newQuery,
        },
      });
    } else {
      newQuery = queryState.filter((e) => e !== getQuery);
      this.setState({
        query: {
          ...this.state.query,
          [filterType]: newQuery,
        },
      });
    }

    let queryStr = "";
    switch (filterType) {
      case "brand": {
        let { rating, discount } = this.state.query;
        newQuery.forEach((item) => {
          queryStr = !queryStr.length ? `${filterType}=${item}` : `${queryStr}&${filterType}=${item}`;
        });
        if (rating.length !== 0) {
          let minrating = Math.min(...rating);
          queryStr = !queryStr.length ? `rating[gte]=${minrating}` : `${queryStr}&rating[gte]=${minrating}`;
        }
        if (discount.length !== 0) {
          let mindiscount = Math.min(...discount);
          queryStr = !queryStr.length ? `discount[gte]=${mindiscount}` : `${queryStr}&discount[gte]=${mindiscount}`;
        }
        break;
      }
      case "rating": {
        let { brand, discount } = this.state.query;
        if (newQuery.length !== 0) {
          let minrating = Math.min(...newQuery);
          newQuery && (queryStr = !queryStr.length ? `${filterType}[gte]=${minrating}` : `${queryStr}&${filterType}[gte]=${minrating}`);
        }
        if (discount.length !== 0) {
          let mindiscount = Math.min(...discount);
          queryStr = !queryStr.length ? `discount[gte]=${mindiscount}` : `${queryStr}&discount[gte]=${mindiscount}`;
        }
        brand.forEach((item) => {
          queryStr = !queryStr.length ? `brand=${item}` : `${queryStr}&brand=${item}`;
        });
        break;
      }
      case "discount": {
        let { brand, rating } = this.state.query;
        if (newQuery.length !== 0) {
          let minDicount = Math.min(...newQuery);
          newQuery && (queryStr = !queryStr.length ? `${filterType}[gte]=${minDicount}` : `${queryStr}&${filterType}[gte]=${minDicount}`);
        }
        if (rating.length !== 0) {
          let minrating = Math.min(...rating);
          newQuery && (queryStr = !queryStr.length ? `${filterType}[gte]=${minrating}` : `${queryStr}&${filterType}[gte]=${minrating}`);
        }
        brand.forEach((item) => {
          queryStr = !queryStr.length ? `brand=${item}` : `${queryStr}&brand=${item}`;
        });
      }
      default:
        break;
    }
    console.log(queryStr);
    this.props.fetchData(queryStr);
    this.props.history.push(`?${queryStr}`);
  };

  render() {
    console.log(this.state.query);
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
              <CoustmerRating filterHandler={this.filterHandler} />
              <Discount filterHandler={this.filterHandler} />
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
