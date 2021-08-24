import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CartState, Product } from "../../store/reducers/cart-index";

type CartTotal = {
  total: number;
  amount: number;
};

export default function useComputeTotal(): CartTotal {
  const initialState: CartTotal = {
    total: 0,
    amount: 0,
  };

  const Products = useSelector((state: CartState) => state);
  const compute = (products: any[]): CartTotal =>
    products.reduce((reducer: CartTotal, item: Product) => {
      if (item.amount && item.price) {
        reducer.amount += item.amount;
        reducer.total += parseFloat(item.price) * item.amount;
      }
      return reducer;
    }, initialState);

  return compute(Object.values(Products.products));
}
