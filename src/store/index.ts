import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import {Reducer} from './reducers/cart-index';

const makeStore = () => {
  const store = createStore(Reducer);
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
