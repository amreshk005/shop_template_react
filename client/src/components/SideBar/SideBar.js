import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "../../App.css";

import PriceMap from "./PriceMap/PriceMap";

export default class SideBar extends Component {
  state = {
    categories: [
      'Bags, Wallets & Belts',
      'Bags & Backpacks', 
      'Laptop Bags'
    ],
    brand: [
      'Skybags',
      'American Tourister',
      'Puma',
      'Theskinmantra',
      'LeeRooy',
      'ACM'
    ],
    coustomer_rating: [
      <span>4 &#9733; & above</span>,
      <span>3 &#9733; & above</span>,
      <span>2 &#9733; & above</span>,
      <span>1 &#9733; & above</span>
    ],
    discount: [
      '70% or more',
      '60% or more',
      '50% or more',
      '40% or more',
      '30% or more',
      '20% or more',
      '10% or more'
    ],
    size: [
      '10 inch',
      '10 inch - 11 inch',
      '10 inch - 12 inch',
      '10 inch - 13 inch',
      '10 inch - 14 inch',
      '10 inch - 15 inch'
    ],
    compartments: [
      '1',
      '2',
      '3 or more'
    ],
    material: [
      'leather',
      'cotton',
      'mixedcotton',
      'fibre'
    ],
    theme: [
      'Urban Backpacks',
      'Laptops',
      'Faux Leather',
      'Top Handle',
      'Superman',
      'Hand Carry'
    ],
    offers: [
      'Bank Offer',
      'Buy More,Save More',
      'No Cost EMI',
      'Special Price'
    ],

  }

 
  render() {
  // const extensions = this.state.coustomer_rating.map((item) => `${4 - this.state.coustomer_rating.indexOf(item)}&#${item}; & above`).join(',');
  // console.log(extensions)
   const categories_list = this.state.categories.map(igkey => {
      return(
        <div className={classes[`sidebar__associate__content__2__categories${this.state.categories.indexOf(igkey) + 1}`]}>
        <div className={classes[`sidebar__associate__content__2__categories${this.state.categories.indexOf(igkey) + 1}__items`]}>
          <span>
            <svg className={classes["icon icon-cheveron-left"]} hieght="15px" width="15px" viewBox="0 0 20 15">
              <use xlinkHref="#icon-cheveron-left"></use>
              <path d="M7.050 9.293l-0.707 0.707 5.657 5.657 1.414-1.414-4.242-4.243 4.242-4.243-1.414-1.414z">
              </path>
            </svg>
          </span>
          <a href="#">{igkey}</a>
        </div>
        </div>
        )
      }
    )
  const Brand_list = this.state.brand.map(igkey => {
    return(
      <div className={classes[`sidebar__associate__content__5__contentsection__content__${this.state.brand.indexOf(igkey) + 2}`]}>
      <div className={classes[`sidebar__associate__content__5__contentsection__content__${this.state.brand.indexOf(igkey) + 2}__brandsection`]}>
        <label>
          <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
          <div className={classes["divcheckbox"]}></div>
          <div className={classes["brand"]}>
            {igkey} 
          </div>
        </label>
      </div>
    </div>
    )
  })
   const coustomer_rating_list = this.state.coustomer_rating.map(igkey => {
  
      return(
        <div className={classes[`sidebar__associate__content__6__contentsection__content__${this.state.coustomer_rating.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__6__contentsection__content__${this.state.coustomer_rating.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
              {igkey.props.children}
            </div>
          </label>
        </div>
      </div>
      )
    })

    const discount_list = this.state.discount.map(igkey => {
      return (
        <div className={classes[`sidebar__associate__content__7__contentsection__content__${this.state.discount.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__7__contentsection__content__${this.state.discount.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
              {igkey}
            </div>
          </label>
        </div>
      </div>
      )
    })

    const size_list = this.state.size.map(igkey => {
      return (
        <div className={classes[`sidebar__associate__content__8__contentsection__content__${this.state.size.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__8__contentsection__content__${this.state.size.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
             {igkey}
            </div>
          </label>
        </div>
      </div>
      )
    })

    const compartments_list = this.state.compartments.map(igkey => {
      return(
        <div className={classes[`sidebar__associate__content__9__contentsection__content__${this.state.compartments.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__9__contentsection__content__${this.state.compartments.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
              {igkey}
            </div>
          </label>
        </div>
      </div>
      )
    })
    const material_list = this.state.material.map(igkey=> {
      return (
        <div className={classes[`sidebar__associate__content__10__contentsection__content__${this.state.material.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__10__contentsection__content__${this.state.material.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
              {igkey}
            </div>
          </label>
        </div>
      </div>
      )
    })

    const theme_list = this.state.theme.map(igkey=> {
      return (
        <div className={classes[`sidebar__associate__content__11__contentsection__content__${this.state.theme.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__11__contentsection__content__${this.state.theme.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
              {igkey}
            </div>
          </label>
        </div>
      </div>
      )
    })

    const offer_list = this.state.offers.map(igkey=> {
      return (
        <div className={classes[`sidebar__associate__content__12__contentsection__content__${this.state.offers.indexOf(igkey) + 2}`]}>
        <div className={classes[`sidebar__associate__content__12__contentsection__content__${this.state.offers.indexOf(igkey) + 2}__brandsection`]}>
          <label>
            <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
            <div className={classes["divcheckbox"]}></div>
            <div className={classes["brand"]}>
              {igkey}
            </div>
          </label>
        </div>
      </div>
      )
    })




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
            {categories_list}       
            </div>
            {/* <!-- 2th sidebar ended -->
            <!-- 3th sidebar string --> */}
            <PriceMap />
          {/* <!-- 4th sidebar string --> */}
          <div className={classes["sidebar__associate__content__4"]}>
            <div
              className={classes["sidebar__associate__content__4__assuredsection"]}
            >
              <label>
                <input
                  className={classes["inputBox"]}
                  type="checkbox"
                  name=""
                  readonly
                  value="on"
                />
                <div className={classes["inputBox1"]}></div>
                <div className={classes["assuredlogo"]}>
                  <img height="21" src={require('../../assets/images/fa_8b4b59.png')}  alt="assuredlogo" />
                </div>
              </label>
            </div>
            <div className={classes["sidebar__associate__content__4__help"]}>
              <span
                className={
                  classes["sidebar__associate__content__4__help__question"]
                }
              >
                ?
              </span>
            </div>
          </div>
            {/* <!-- 4th sidebar ended -->
            <!-- 5th sidebar string --> */}
            <div className={classes["sidebar__associate__content__5"]}>
              <div className={classes["sidebar__associate__content__5__titlesection"]}>
                <div className={classes["sidebar__associate__content__5__titlesection__title"]}>
                  Brand
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__5__contentsection"]}>
                <div className={classes["sidebar__associate__content__5__contentsection__content"]}>
                  <div className={classes["sidebar__associate__content__5__contentsection__content__1"]}>
                    <svg className={classes["icon icon-search1"]} height="15" width="15" viewBox="0 0 17 18">
                      <use xlinkHref="#icon-search1"></use>
                      <path
                        d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z">
                      </path>
                    </svg>
                    <input type="text" className={classes["sidebar__associate__content__5__contentsection__content__1__input"]}
                      placeholder="Search Brand" />
                  </div>
                  {Brand_list}
                </div>
                <div className={classes["sidebar__associate__content__5__contentsection__more"]}>
                  <span>1790 More</span>
                </div>
              </div>
            </div>
            {/* <!-- 5th sidebar ended -->
            <!-- 6th sidebar string --> */}
            <div className={classes["sidebar__associate__content__6"]}>
              <div className={classes["sidebar__associate__content__6__titlesection"]}>
                <div className={classes["sidebar__associate__content__6__titlesection__title"]}>
                  CUSTOMER RATINGS
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__6__contentsection"]}>
                <div className={classes["sidebar__associate__content__6__contentsection__content"]}>        
                  {coustomer_rating_list}
                </div>
              </div>
            </div>
            {/* <!-- 6th sidebar ended -->
            <!-- 7th sidebar string --> */}
            <div className={classes["sidebar__associate__content__7"]}>
              <div className={classes["sidebar__associate__content__7__titlesection"]}>
                <div className={classes["sidebar__associate__content__7__titlesection__title"]}>
                  DISCOUNT
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="]}27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__7__contentsection"]}>
                <div className={classes["sidebar__associate__content__7__contentsection__content"]}>
                  {discount_list}
                </div>
              </div>
            </div>
            {/* <!-- 7th sidebar ended -->
            <!-- 8th sidebar string --> */}
            <div className={classes["sidebar__associate__content__8"]}>
              <div className={classes["sidebar__associate__content__8__titlesection"]}>
                <div className={classes["sidebar__associate__content__8__titlesection__title"]}>
                  COMPATIBLE SIZE
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__8__contentsection"]}>
                <div className={classes["sidebar__associate__content__8__contentsection__content"]}>
                  <div className={classes["sidebar__associate__content__8__contentsection__content__1"]}>
                    <svg className={classes["icon icon-search1"]} height="15" width="15" viewBox="0 0 17 18">
                      <use xlinkHref="#icon-search1"></use>
                      <path
                        d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z">
                      </path>
                    </svg>
                    <input type="text" className={classes["sidebar__associate__content__8__contentsection__content__1__input"]}
                      placeholder="Search Size" />
                  </div>
                  {size_list}
       
                  <div className={classes["sidebar__associate__content__5__contentsection__more"]}>
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 8th sidebar ended -->
            <!-- 9th sidebar string --> */}
            <div className={classes["sidebar__associate__content__9"]}>
              <div className={classes["sidebar__associate__content__9__titlesection"]}>
                <div className={classes["sidebar__associate__content__9__titlesection__title"]}>
                  NUMBER OF COMPARTMENTS
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__9__contentsection"]}>
                <div className={classes["sidebar__associate__content__9__contentsection__content"]}>
                  {compartments_list}
                </div>
              </div>
            </div>
            {/* <!-- 9 sidebar ended -->
            <!-- 10 sidebar starting --> */}
            <div className={classes["sidebar__associate__content__10"]}>
              <div className={classes["sidebar__associate__content__10__titlesection"]}>
                <div className={classes["sidebar__associate__content__10__titlesection__title"]}>
                  MATERIAL
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__10__contentsection"]}>
                <div className={classes["sidebar__associate__content__10__contentsection__content"]}>
                  {material_list}
        
                  <div className={classes["sidebar__associate__content__5__contentsection__more"]}>
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 10th sidebar ended -->
            <!-- 11th sidebar string --> */}
            <div className={classes["sidebar__associate__content__11"]}>
              <div className={classes["sidebar__associate__content__11__titlesection"]}>
                <div className={classes["sidebar__associate__content__11__titlesection__title"]}>
                  THEME
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__11__contentsection"]}>
                <div className={classes["sidebar__associate__content__11__contentsection__content"]}>
              {theme_list}
      
                  <div className={classes["sidebar__associate__content__5__contentsection__more"]}>
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 11th sidebar ended -->
            <!-- 12th sidebar string --> */}
            <div className={classes["sidebar__associate__content__12"]}>
              <div className={classes["sidebar__associate__content__12__titlesection"]}>
                <div className={classes["sidebar__associate__content__12__titlesection__title"]}>
                  OFFERS
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__12__contentsection"]}>
                <div className={classes["sidebar__associate__content__12__contentsection__content"]}>
           
              {offer_list}
            
                  <div className={classes["sidebar__associate__content__5__contentsection__more"]}>
                    <span>126 More</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 12th sidebar ended -->
            <!-- 13th sidebar string --> */}
            <div className={classes["sidebar__associate__content__13"]}>
              <div className={classes["sidebar__associate__content__13__titlesection"]}>
                <div className={classes["sidebar__associate__content__13__titlesection__title"]}>
                  DISCOUNT
                </div>
                <svg className={classes["icon icon-cheveron-up"]} width="16" height="27" viewBox="0 0 16 27">
                  <use xlinkHref="#icon-cheveron-up"></use>
                  <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z">
                  </path>
                </svg>
              </div>
              <div className={classes["sidebar__associate__content__13__contentsection"]}>
                <div className={classes["sidebar__associate__content__13__contentsection__content"]}>
                  <div className={classes["sidebar__associate__content__13__contentsection__content__2"]}>
                    <div className={classes["sidebar__associate__content__13__contentsection__content__2__brandsection"]}>
                      <label>
                        <input className={classes["inputBox"]} type="checkbox" name="" readonly value="on" />
                        <div className={classes["divcheckbox"]}></div>
                        <div className={classes["brand"]}>
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
