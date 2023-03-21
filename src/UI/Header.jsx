import React,{useContext} from 'react'
import classes from '../cssmodule/header.module.css'
import {FaCartPlus} from 'react-icons/fa';
import {cartContext} from "../store/CartContext";



export default function Header(props) {
  const crtx=useContext(cartContext)
  const numberofitem=crtx.items.reduce((currval,item)=>{return currval+item.amount},0)
  return (
    <>
    
    <header className={classes.head}>
      <div style={{color:'whitesmoke',fontSize:"25px",fontWeight:"bold"}}>Foodx <span className={classes.sp2}>
      <span onClick={props.onClick} className={classes.crttext}>Cart</span>
      <button onClick={props.onClick} className={classes.btn} style={{borderRadius:"10px",textAlign:"center"}}>
      <FaCartPlus/>  </button><sup className={classes.sup1}>{numberofitem}</sup></span></div> 
    </header>
    </>
  )
}
