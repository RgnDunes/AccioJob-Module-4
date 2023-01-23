export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_DECREASE_ITEM = "INCREASE_DECREASE_ITEM";

export const addToCartAction = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const removeFromCartAction = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
};
export const increaseDecreaseItem = (payload) => {
  return {
    type: INCREASE_DECREASE_ITEM,
    payload: payload,
  };
};
