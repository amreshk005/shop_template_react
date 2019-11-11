import React from "react";

import Aux from "../../hoc/Aux";
import navbar from "../Navbar/Navbar";

const layout = props => (
  <Aux>
    <navbar />
    <main>{props.children}</main>
  </Aux>
);

export default layout;
