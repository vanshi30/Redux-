import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// items
import cartItems from "./cart-items";
// redux stuff
import reducer from "./components/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";


const initialStore = {
  cart:cartItems,
  total:0,
  amount:0
}

const store = createStore(reducer,initialStore);
console.log("this is get state",store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}> 
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
