import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import classes from "./ProductsRow.module.css";
import { fetchData } from "../../../redux/action/action";

function ProductsRow(props) {
  useEffect(() => {
    // console.log("data");
    props.fetchData();
    // console.log(props.data);
  }, []);
  let { data } = props.data;
  return (
    <>
      <div className={classes["itemsrow__row"]}>
        <div className={classes["itemsrow__row__items"]}>
          {!data ? (
            <div>Loading</div>
          ) : (
            data.map((e) => (
              <div key={uuidv4()} className={classes["itemsrow__row__items__item"]}>
                <div className={classes["itemsrow__row__items__item__imagesection"]}>
                  <div className={classes["itemsrow__row__items__item__imagesection__range"]}>
                    <img className={classes["itemsrow__row__items__item__imagesection__range__image"]} src={e.product_img} alt="bag-1" />
                  </div>
                  <span style={{ zIndex: "100", fontSize: ".45rem" }}>
                    <FontAwesomeIcon icon={faHeart} size="3x" color="grey" />
                  </span>
                </div>
                <div className={classes["itemsrow__row__items__item__infosection"]}>
                  <span className={classes["itemsrow__row__items__item__infosection__brand"]}>{e.brand}</span>
                  <span className={classes["itemsrow__row__items__item__infosection__name"]}>{e.product_name}</span>
                  {/* <span className={classes["itemsrow__row__items__item__infosection__colour"]}>Black</span> */}
                  <div className={classes["itemsrow__row__items__item__infosection__assuredlogo"]}>
                    <img height="18" src="/assets/images/fa_8b4b59.png" alt="assuredlogo" />
                  </div>
                  <div className={classes["itemsrow__row__items__item__infosection__pricesection"]}>
                    <span className={classes["price"]}>&#8377;{e.price}</span>
                    <span className={classes["actualprice"]}>
                      {e.OriginalPrice}
                      <div className={classes["cutoff"]}></div>
                    </span>
                    <span className={classes["off"]}>{100 - Math.floor((e.price / e.OriginalPrice) * 100)}%off</span>
                  </div>
                  <div className={classes["addtocart"]}>
                    <button className={classes["cartbtn"]} type="submit">
                      <span style={{ zIndex: "100", fontSize: ".45rem" }}>
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#000" />
                      </span>
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
