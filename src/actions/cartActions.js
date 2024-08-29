import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_ALL_CART_ITEMS,
} from './types';

export const addToCart = item => ({
  type: ADD_CART_ITEM,
  payload: item,
});
export const removeFromCart = item => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});
export const removeAllFromCart = item => ({
  type: REMOVE_ALL_CART_ITEMS,
  payload: item,
});
