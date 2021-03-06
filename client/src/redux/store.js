import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import products from "./reducer/products";
import product from "./reducer/product";
import auth from "./reducer/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products: products,
  auth: auth,
  product: product,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export { store, rootReducer };
