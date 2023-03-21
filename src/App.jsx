//import './App.css';
import Cart from './container/Cart';
import Header from './UI/Header';
import Mealsummry from "./UI/Mealsummry"
import classes from "./cssmodule/header.module.css"
import Mealitem from './container/Mealitem';
import { useState } from 'react';
import {CartContext} from "./store/CartContext"

function App() {
   const [cartvisible,setCartVisible]=useState(false)
   const makecartvisible=()=>{
    setCartVisible(true)
   }
   const makecarthide=()=>{
    setCartVisible(false)
   }
  return (
    <CartContext>
    <div className={classes.app}>
      {cartvisible&&<Cart onClick={makecarthide} />}
      <Header onClick={makecartvisible}/>
      <Mealsummry/>
      <Mealitem/>
    </div>
    </CartContext>
  );
}

export default App;

