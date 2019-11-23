import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "../../App.css";

import PriceMap from "./PriceMap/PriceMap";

export default class SideBar extends Component {
  render() {

    return (
    <Aux>
        <div className={classes["sidebar"]}>
        <div className={classes["sidebar__associate"]}>
          <div className={classes["sidebar__associate__content"]}>
            <div className={classes["sidebar__associate__content__1"]}>
              <span className={classes["sidebar__associate__content__1__filters"]}>
                Filters
              </span>
            </div>
            {/* <!-- 1th sidebar ended -->
            <!-- 2th sidebar string --> */}
            <div className={classes["sidebar__associate__content__2"]}>
              <div className={classes["sidebar__associate__content__2__categories"]}>
                <span>CATEGORIES</span>
              </div>

              <div className={classes["sidebar__associate__content__2__categories1"]}>
                <div className={classes["sidebar__associate__content__2__categories1__items"]}>
                  <span>
                    <svg className={classes["icon icon-cheveron-left"]} hieght="15px" width="15px" viewBox="0 0 20 15">
                      <use xlinkHref="#icon-cheveron-left"></use>
                      <path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z">
                      </path>
                    </svg>
                  </span>
                  <a href="#">Bags, Wallets & Belts</a>
                </div>
              </div>

              <div className={classes["sidebar__associate__content__2__categories2"]}>
                <div className={classes["sidebar__associate__content__2__categories2__items"]}>
                  <span>
                    <svg className={classes["icon icon-cheveron-left"]} hieght="15px" width="15px" viewBox="0 0 20 15">
                      <use xlinkHref="#icon-cheveron-left"></use>
                      <path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z">
                      </path>
                    </svg>
                  </span>
                  <a href="#">Bags & Backpacks</a>
                </div>
              </div>

              <div className={classes["sidebar__associate__content__2__categories3"]}>
                <div className={classes["sidebar__associate__content__2__categories3__items"]}>
                  <span>
                    <svg className={classes["icon icon-cheveron-left"]} hieght="15px" width="15px" viewBox="0 0 20 15" fill="#fff">
                      <use xlinkHref="#icon-cheveron-left"></use>
                      <path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z">
                      </path>
                    </svg>
                  </span>
                  <a href="#">Laptop Bags</a>
                </div>
              </div>
            </div>
            {/* <!-- 2th sidebar ended -->
            <!-- 3th sidebar string --> */}
            <PriceMap />
            {/* <!-- 4th sidebar ended -->
            <!-- 5th sidebar string --> */}
            <div className="sidebar__associate__content__5">
              <div className="sidebar__associate__content__5__titlesection">
                <div className="sidebar__associate__content__5__titlesection__title">
                  Brand
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__5__contentsection">
                <div className="sidebar__associate__content__5__contentsection__content">
                  <div className="sidebar__associate__content__5__contentsection__content__1">
                    <svg className="icon icon-search1" height="15" width="15" viewBox="0 0 17 18">
                      <use xlinkHref="#icon-search1"></use>
                      <path
                        d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z">
                      </path>
                    </svg>
                    <input type="text" className="sidebar__associate__content__5__contentsection__content__1__input"
                      placeholder="Search Brand" />
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__content__2">
                    <div className="sidebar__associate__content__5__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Skybags
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__content__3">
                    <div className="sidebar__associate__content__5__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          American Tourister
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__content__4">
                    <div className="sidebar__associate__content__5__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Puma
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__content__5">
                    <div className="sidebar__associate__content__5__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Theskinmantra
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__content__6">
                    <div className="sidebar__associate__content__5__contentsection__content__6__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          LeeRooy
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__content__7">
                    <div className="sidebar__associate__content__5__contentsection__content__7__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          ACM
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sidebar__associate__content__5__contentsection__more">
                  <span>1790 More</span>
                </div>
              </div>
            </div>
            {/* <!-- 5th sidebar ended -->
            <!-- 6th sidebar string --> */}
            <div className="sidebar__associate__content__6">
              <div className="sidebar__associate__content__6__titlesection">
                <div className="sidebar__associate__content__6__titlesection__title">
                  CUSTOMER RATINGS
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__6__contentsection">
                <div className="sidebar__associate__content__6__contentsection__content">
                  <div className="sidebar__associate__content__6__contentsection__content__2">
                    <div className="sidebar__associate__content__6__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          4&#9733; & above
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__6__contentsection__content__3">
                    <div className="sidebar__associate__content__6__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          3&#9733; & above
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__6__contentsection__content__4">
                    <div className="sidebar__associate__content__6__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          2&#9733; & above
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__6__contentsection__content__5">
                    <div className="sidebar__associate__content__6__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          1&#9733; & above
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 6th sidebar ended -->
            <!-- 7th sidebar string --> */}
            <div className="sidebar__associate__content__7">
              <div className="sidebar__associate__content__7__titlesection">
                <div className="sidebar__associate__content__7__titlesection__title">
                  DISCOUNT
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__7__contentsection">
                <div className="sidebar__associate__content__7__contentsection__content">
                  <div className="sidebar__associate__content__7__contentsection__content__2">
                    <div className="sidebar__associate__content__7__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          70% or more
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__7__contentsection__content__3">
                    <div className="sidebar__associate__content__7__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          60% or more
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__7__contentsection__content__4">
                    <div className="sidebar__associate__content__7__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          50% or more
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__7__contentsection__content__5">
                    <div className="sidebar__associate__content__7__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          40% or more
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__7__contentsection__content__6">
                    <div className="sidebar__associate__content__7__contentsection__content__6__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          30% or more
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__7__contentsection__content__7">
                    <div className="sidebar__associate__content__7__contentsection__content__7__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          20% or more
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__7__contentsection__content__8">
                    <div className="sidebar__associate__content__7__contentsection__content__8__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10% or more
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 7th sidebar ended -->
            <!-- 8th sidebar string --> */}
            <div className="sidebar__associate__content__8">
              <div className="sidebar__associate__content__8__titlesection">
                <div className="sidebar__associate__content__8__titlesection__title">
                  COMPATIBLE SIZE
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__8__contentsection">
                <div className="sidebar__associate__content__8__contentsection__content">
                  <div className="sidebar__associate__content__8__contentsection__content__1">
                    <svg className="icon icon-search1" height="15" width="15" viewBox="0 0 17 18">
                      <use xlinkHref="#icon-search1"></use>
                      <path
                        d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z">
                      </path>
                    </svg>
                    <input type="text" className="sidebar__associate__content__8__contentsection__content__1__input"
                      placeholder="Search Size" />
                  </div>
                  <div className="sidebar__associate__content__8__contentsection__content__2">
                    <div className="sidebar__associate__content__8__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10 inch
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__8__contentsection__content__3">
                    <div className="sidebar__associate__content__8__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10 inch 10 - 11 Inch
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__8__contentsection__content__4">
                    <div className="sidebar__associate__content__8__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10 inch 10 inch
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__8__contentsection__content__8">
                    <div className="sidebar__associate__content__8__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10 inch inch
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__8__contentsection__content__6">
                    <div className="sidebar__associate__content__8__contentsection__content__6__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10 inch inch
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__8__contentsection__content__7">
                    <div className="sidebar__associate__content__8__contentsection__content__7__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          10 inch Inches
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__more">
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 8th sidebar ended -->
            <!-- 9th sidebar string --> */}
            <div className="sidebar__associate__content__9">
              <div className="sidebar__associate__content__9__titlesection">
                <div className="sidebar__associate__content__9__titlesection__title">
                  NUMBER OF COMPARTMENTS
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__9__contentsection">
                <div className="sidebar__associate__content__9__contentsection__content">
                  <div className="sidebar__associate__content__9__contentsection__content__2">
                    <div className="sidebar__associate__content__9__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          1
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__9__contentsection__content__3">
                    <div className="sidebar__associate__content__9__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          2
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__9__contentsection__content__4">
                    <div className="sidebar__associate__content__9__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          3 or more
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 9 sidebar ended -->
            <!-- 10 sidebar starting --> */}
            <div className="sidebar__associate__content__10">
              <div className="sidebar__associate__content__10__titlesection">
                <div className="sidebar__associate__content__10__titlesection__title">
                  MATERIAL
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__10__contentsection">
                <div className="sidebar__associate__content__10__contentsection__content">
                  <div className="sidebar__associate__content__10__contentsection__content__2">
                    <div className="sidebar__associate__content__10__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Aritifical Leather
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__10__contentsection__content__3">
                    <div className="sidebar__associate__content__10__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Canvas
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__10__contentsection__content__4">
                    <div className="sidebar__associate__content__10__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Cotton
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__10__contentsection__content__5">
                    <div className="sidebar__associate__content__10__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Denim
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__10__contentsection__content__6">
                    <div className="sidebar__associate__content__10__contentsection__content__6__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Fabric
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__10__contentsection__content__7">
                    <div className="sidebar__associate__content__10__contentsection__content__7__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Genuine Leather
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__more">
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 10th sidebar ended -->
            <!-- 11th sidebar string --> */}
            <div className="sidebar__associate__content__11">
              <div className="sidebar__associate__content__11__titlesection">
                <div className="sidebar__associate__content__11__titlesection__title">
                  THEME
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__11__contentsection">
                <div className="sidebar__associate__content__11__contentsection__content">
                  <div className="sidebar__associate__content__11__contentsection__content__2">
                    <div className="sidebar__associate__content__11__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Urban Backpacks
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__11__contentsection__content__3">
                    <div className="sidebar__associate__content__11__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Laptops
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__11__contentsection__content__4">
                    <div className="sidebar__associate__content__11__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Faux Leather
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__11__contentsection__content__5">
                    <div className="sidebar__associate__content__11__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Top Handle
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__11__contentsection__content__6">
                    <div className="sidebar__associate__content__11__contentsection__content__6__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Superman
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__11__contentsection__content__7">
                    <div className="sidebar__associate__content__11__contentsection__content__7__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Hand Carry
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__more">
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 11th sidebar ended -->
            <!-- 12th sidebar string --> */}
            <div className="sidebar__associate__content__12">
              <div className="sidebar__associate__content__12__titlesection">
                <div className="sidebar__associate__content__12__titlesection__title">
                  OFFERS
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__12__contentsection">
                <div className="sidebar__associate__content__12__contentsection__content">
                  <div className="sidebar__associate__content__12__contentsection__content__2">
                    <div className="sidebar__associate__content__12__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Bank Offer
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__12__contentsection__content__3">
                    <div className="sidebar__associate__content__12__contentsection__content__3__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Buy More, Save More
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__12__contentsection__content__4">
                    <div className="sidebar__associate__content__12__contentsection__content__4__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          No Cost EMI
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__12__contentsection__content__5">
                    <div className="sidebar__associate__content__12__contentsection__content__5__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Special Price
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="sidebar__associate__content__5__contentsection__more">
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 12th sidebar ended -->
            <!-- 13th sidebar string --> */}
            <div className="sidebar__associate__content__13">
              <div className="sidebar__associate__content__13__titlesection">
                <div className="sidebar__associate__content__13__titlesection__title">
                  DISCOUNT
                </div>
                <svg className="icon icon-cheveron-up" width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className="sidebar__associate__content__13__contentsection">
                <div className="sidebar__associate__content__13__contentsection__content">
                  <div className="sidebar__associate__content__13__contentsection__content__2">
                    <div className="sidebar__associate__content__13__contentsection__content__2__brandsection">
                      <label>
                        <input className="inputBox" type="checkbox" name="" readonly value="on" />
                        <div className="divcheckbox"></div>
                        <div className="brand">
                          Include Out of Stock
                        </div>
                      </label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* <!-- 13th sidebar ended --> */}

          </div>
        </div>
      </div>
    </Aux>
    );
  }
}
