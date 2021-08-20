export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const CLEAN_CART = 'CLEAN_CART';

export const addToCard = (product: any) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeToCard = (product: any) => ({
  type: REMOVE_TO_CART,
  payload: product
});

export const cleanCart = () => ({
  type: CLEAN_CART,
});