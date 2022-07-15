import { CLEAR_CART, INCREASE, REMOVE } from "./actions";

export default function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((CartItem) => CartItem.id !== action.payload.id),
    };
  }
  return state;
}
