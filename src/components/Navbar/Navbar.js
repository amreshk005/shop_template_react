import React from "react";
import classes from "../../App.css";

export const navbar = props => {
  return (
    <div className={classes.navbar-1}>
      <div className={classes.navbar-1__margin}></div>

      <div className={classes.navbar-1__content}>
        <div className={classes.navbar-1__content__logosection}>
          <img
            className={classes.navbar-1__content__logosection__logo}
            src={require("../../assets/images/filp_logo.png")}
            alt="filp_logo"
          />
        </div>
        <div className="navbar-1__content__formsection">
          <form action="#" className="navbar-1__content__formsection__form">
            <div className="navbar-1__content__formsection__form__inner">
              <input
                type="text"
                className="navbar-1__content__formsection__form__inner__input"
              />
              <button className="navbar-1__content__formsection__form__inner__button">
                <svg
                  className="icon icon-search1"
                  height="20px"
                  width="20px"
                  viewBox="0 0 20 20"
                  fill="#2874f0"
                >
                  <use xlinkHref="#icon-search1"></use>
                  <path d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="navbar-1__content__Accountsection">
          <div className="navbar-1__content__Accountsection__Account">
            <span className="navbar-1__content__Accountsection__Account__myAccount">
              My Account
              <svg
                className="icon icon-cheveron-down"
                width="9"
                height="20"
                viewBox="5 3 10 1"
                fill="#fff"
              >
                <use xlinkHref="#icon-cheveron-down"></use>
                <path
                  d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                      4.242-4.243-4.242-1.414 1.414z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="navbar-1__content__MoreSection">
          <div className="navbar-1__content__MoreSection__More">
            <span className="navbar-1__content__MoreSection__More__myMore">
              More
              <svg
                className="icon icon-cheveron-down"
                width="9"
                height="20"
                viewBox="5 3 10 1"
                fill="#fff"
              >
                <use xlinkHref="#icon-cheveron-down"></use>
                <path
                  d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 
                      4.242-4.243-4.242-1.414 1.414z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="navbar-1__content__MyCartSection">
          <div className="navbar-1__content__MyCartSection__Cart">
            <span className="navbar-1__content__MyCartSection__Cart__myCart">
              MyCart
              <span className="navbar-1__content__MyCartSection__Cart__myCart__icon">
                <svg
                  className="icon icon-cart1"
                  height="20px"
                  width="28px"
                  viewBox="0 0 48 30"
                >
                  <use xlinkHref="#icon-cart1"></use>
                  <path d="M31.914 5.4l-2.914 11.6c0 0.139-0.028 0.27-0.078 0.389-0.102 0.24-0.293 0.432-0.532 0.533-0.12 0.051-0.252 0.078-0.39 0.078h-19l0.8 4h17.2c0.553 0 1 0.447 1 1s-0.447 1-1 1h-18c-0.553 0-1-0.447-1-1l-3.8-19h-3.2c-0.552 0-1-0.448-1-1s0.448-1 1-1h4c0.553 0 1 0.448 1 1l0.2 1h24.8c0.553 0 1 0.448 1 1 0 0.143-0.032 0.277-0.086 0.4zM8.6 16h3.4v-10h-5.4l2 10zM18 6h-5v10h5v-10zM24 6h-5v10h5v-10zM25 6v10h2.253l2.533-10h-4.786zM11 26c1.657 0 3 1.344 3 3s-1.343 3-3 3-3-1.344-3-3 1.343-3 3-3zM11 30c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1zM25 26c1.657 0 3 1.344 3 3s-1.343 3-3 3-3-1.344-3-3 1.343-3 3-3zM25 30c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1z"></path>
                </svg>
                <div className="navbar-1__content__MyCartSection__Cart__myCart__icon__notifications">
                  8
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-1__margin1"></div>
    </div>
  );
};
