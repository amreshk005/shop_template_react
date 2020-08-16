import React, { useEffect } from "react";
import Details from "./Details/Details";
import classes from "./Product.module.css";
import Ratings from "./Ratings/Ratings";
import { fetchData } from "../../redux/action/product";
import { connect } from "react-redux";

function Product(props) {
  useEffect(() => {
    let { id } = props.location.state;
    console.log(id);
    props.fetchData(id);
  }, []);

  let { data } = props.data;
  console.log(data, props.isLoading);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes["product_details_container"] + " row col-12 m-0"}>
      <div className="product_left_container col-5 p-0">
        <div className={classes["product_image_section"] + " "}>
          <div className="d-flex justify-content-center" style={{ height: "448px" }}>
            <img src={data.foundProduct.product_img[0]} alt="bag-image" />
          </div>
          <div className={classes["button_detail_cart"] + " row mt-5"}>
            <ul className="row w-100">
              <li className="col col-6-12 w-50">
                <button className={classes["button_cart"]}>
                  <svg className="cart_icon" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className=""
                      d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                      fill="#fff"
                    ></path>
                  </svg>{" "}
                  ADD TO CART
                </button>
              </li>
              <li className="col col-6-12 w-50">
                <button className={classes["button_buy"]} type="button">
                  <div className={classes["buy_icon"]}></div>
                  BUY NOW
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["details_section"] + " col-7 mt-2"}>
        <Details />
        <Ratings />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.product.isLoading,
    data: state.product.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
