import { INCREASE, DECREASE, REMOVE, CLEAR, GET_TOTALS } from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    console.log(action.payload.id);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      console.log(cartItem);
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      return {...state,cart:state.cart.filter((s)=>s.id !== action.payload.id)}
    } else {
      tempCart = state.cart.map((t) => {
        if (t.id === action.payload.id) {
          t = { ...t, amount: t.amount - 1 };
        }
        return t;
      });
    }
    return { ...state, cart: tempCart };
  }
  if(action.type === GET_TOTALS){
    // console.log("totals");
    let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
        console.log("cartItem",cartItem);
        console.log("cartTotal",cartTotal);
        const {price, amount} = cartItem
        cartTotal.amount+=amount
        const itemTotal = price*amount
        cartTotal.total+=itemTotal
        return cartTotal
    },{total:0,amount:0})
    console.log("TOTAL:",typeof(total));
    total = parseFloat(total.toFixed(2))
    return {...state,amount,total}
  }
  return state;
};
export default reducer;
