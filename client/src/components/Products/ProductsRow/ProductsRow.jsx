import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import classes from "./ProductsRow.module.css";
import { fetchData } from "../../../redux/action/action";

function ProductsRow(props) {
  useEffect(() => {
    // console.log("data");
    console.log(props.fetchData());
    console.log(props.data);
  }, []);
  let { data } = props.data;
  console.log(data);
  return (
    <>
      <div className={classes["itemsrow__row"]}>
        <div className={classes["itemsrow__row__items"]}>
          {!data ? (
            <div>Loading</div>
          ) : (
            data.products.map((e) => (
              <div key={uuidv4()} className={classes["itemsrow__row__items__item"]}>
                <div className={classes["itemsrow__row__items__item__imagesection"]}>
                  <div className={classes["itemsrow__row__items__item__imagesection__range"]}>
                    <img className={classes["itemsrow__row__items__item__imagesection__range__image"]} src="/assets/images/bag-1.jpeg" alt="bag-1" />
                  </div>
                  {/* <svg className={classes["icon icon-heart"]} style={{ zIndex: "100" }} height="24" width="24" viewBox="0 0 20 16">
                    <use xlinkHref="#icon-heart"></use>
                    <path d="M10 3.22l-0.61-0.6c-0.983-0.931-2.314-1.504-3.779-1.504-3.038 0-5.5 2.462-5.5 5.5 0 1.462 0.571 2.791 1.501 3.776l-0.002-0.003 8.39 8.39 8.39-8.4c0.928-0.983 1.499-2.312 1.499-3.774 0-3.038-2.462-5.5-5.5-5.5-1.465 0-2.796 0.573-3.782 1.506l0.003-0.002-0.61 0.61z"></path>
                  </svg> */}
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className={classes["itemsrow__row__items__item__infosection"]}>
                  <span className={classes["itemsrow__row__items__item__infosection__name"]}>Asus 15.6* Laptop Bag</span>
                  <span className={classes["itemsrow__row__items__item__infosection__colour"]}>Black</span>
                  <div className={classes["itemsrow__row__items__item__infosection__assuredlogo"]}>
                    <img height="18" src="/assets/images/fa_8b4b59.png" alt="assuredlogo" />
                  </div>
                  <div className={classes["itemsrow__row__items__item__infosection__pricesection"]}>
                    <span className={classes["price"]}>&#8377;699</span>
                    <span className={classes["actualprice"]}>
                      1043
                      <div className={classes["cutoff"]}></div>
                    </span>
                    <span className={classes["off"]}>33%off</span>
                  </div>
                  <div className={classes["addtocart"]}>
                    <button className={classes["cartbtn"]} type="submit">
                      <svg className={classes["icon icon-shopping-cart"]} height="12" width="12" viewBox="0 0 20 20">
                        <use xlinkHref="#icon-shopping-cart"></use>
                        <path d="M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
                      </svg>
                      Addtocart
                    </button>
                  </div>
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
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(ProductsRow);
