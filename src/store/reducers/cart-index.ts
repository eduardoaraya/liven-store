import { ADD_TO_CART, CLEAN_CART, REMOVE_TO_CART } from "../actions/cart"
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  total: 0,
  amount: 0,
  products: {}
};

const calculateCart = (state) => Object
  .values(state.products)
  .reduce((reducer: any, item: any) => {
    reducer.amount += item.amount;
    reducer.total += parseFloat(item.price) * item.amount;
    return reducer;
  }, {
    amount: 0,
    total: 0
  })


const handleAddToCard = (state: any, product: any) => {
  const index = state.products[product.id];
  if (index) {
    index.amount +=1;
  } else {
    state.products[product.id] = {
      ...product,
      amount: 1
    };
  }
  const {
    total, 
    amount
  } = calculateCart(state);

  return {
    ...state,
    total, 
    amount
  };
}


const handleRemoveToCart = (state: any, product: any) => {
  delete state.products[product.id];
  const {
    total, 
    amount
  } = calculateCart(state);
  return {
    ...state,
    total, 
    amount
  };
}


export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE: 
      return {...state, ...action.payload};
    case ADD_TO_CART: 
      return handleAddToCard(state, action.payload);
    case REMOVE_TO_CART: 
      return handleRemoveToCart(state, action.payload);
    case CLEAN_CART: 
      return { ...initialState, products: {} };
    default:
      return state;
  }
} 