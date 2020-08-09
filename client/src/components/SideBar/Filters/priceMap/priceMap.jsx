import React from "react";
import Aux from "../../../../hoc/Aux";
import classes from "./priceMap.module.css";

const priceMap = (props) => {
  const divStyle = {
    map_1: {
      height: "29px",
      width: "29.6013px",
    },
    map_2: {
      height: "22.3125px",
      width: "29.6013px",
    },
    map_3: {
      height: "23.4375px",
      width: "29.6013px",
    },
    map_4: {
      height: "15.625px",
      width: "29.6013px",
    },
    map_5: {
      height: "20.625px",
      width: "29.6013px",
    },
    map_6: {
      height: "17.1875px",
      width: "30.6013px",
    },
    map_7: {
      height: "14.0625px",
      width: "34.6013px",
    },
    map_8: {
      height: "20.1875px",
      width: "34.6013px",
    },
  };
  return (
    <Aux>
      <div className={classes["sidebar__associate__content__3"]}>
        <div className={classes["sidebar__associate__content__3__price"]}>
          <span>PRICE</span>
        </div>
        <div className={classes["sidebar__associate__content__3__mapsection"]}>
          <div className={classes["sidebar__associate__content__3__mapsection__map"]}>
            <div className={classes["sidebar__associate__content__3__mapsection__map__1"]} style={divStyle.map_1}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__2"]} style={divStyle.map_2}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__3"]} style={divStyle.map_3}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__4"]} style={divStyle.map_4}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__5"]} style={divStyle.map_5}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__6"]} style={divStyle.map_6}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__7"]} style={divStyle.map_7}></div>
            <div className={classes["sidebar__associate__content__3__mapsection__map__8"]} style={divStyle.map_8}></div>
          </div>
        </div>
        <div id="range" className={classes["sidebar__associate__content__3__range"]}>
          <div className={classes["sidebar__associate__content__3__range__circlesection1"]}>
            <div id="circle1" className={classes["sidebar__associate__content__3__range__circlesection1__circle"]}></div>
          </div>
          <div className={classes["sidebar__associate__content__3__range__circlesection2"]}>
            <div id="circle2" className={classes["sidebar__associate__content__3__range__circlesection2__circle"]}></div>
          </div>
          <div id="line1" className={classes["sidebar__associate__content__3__range__line1"]}></div>
          <div id="line2" className={classes["sidebar__associate__content__3__range__line2"]}></div>
        </div>
        <div className={classes["sidebar__associate__content__3__limit"]}>
          <div className={classes["sidebar__associate__content__3__limit__box1"]}>
            <select className={classes["sidebar__associate__content__3__limit__box1__min"]}>
              <option value="Min" className={classes["option"]}>
                Min
              </option>
              <option value="500" className={classes["option"]}>
                500
              </option>
              <option value="750" className={classes["option"]}>
                750
              </option>
              <option value="1000" className={classes["option"]}>
                1000
              </option>
            </select>
          </div>
          <div className={classes["sidebar__associate__content__3__limit__to"]}>to</div>
          <div className={classes["sidebar__associate__content__3__limit__box2"]}>
            <select className={classes["sidebar__associate__content__3__limit__box2__min"]}>
              <option value="Min" className={classes["option"]}>
                Max
              </option>
              <option value="500" className={classes["option"]}>
                500
              </option>
              <option value="750" className={classes["option"]}>
                750
              </option>
              <option value="1000" className={classes["option"]}>
                1000
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* {/* <!-- 3th sidebar ended --> */}
    </Aux>
  );
};

export default priceMap;
