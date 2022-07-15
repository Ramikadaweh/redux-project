import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

import reducer from './reducer'
// redux stuff

import {createStore} from 'redux';

import { Provider } from "react-redux";

//reducer is a function used to update store
//reducer has two argument : state & action
// state is the old state that means before update
//action the new state that meanx=s after update

//dispatch method : send actions to the store
//don't mutate the state because redux built on immutability (copy)

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
}

const store = createStore(reducer,initialStore);



console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
