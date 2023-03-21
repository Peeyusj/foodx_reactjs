import React,{useRef,useContext,useState} from 'react'
import classes from "../cssmodule/Meallistitem.module.css"
import Input from '../UI/Input'
import {cartContext} from "../store/CartContext";
export default function Meallistitem(props) {
  
  const crtx=useContext(cartContext)
const[isValidAmount,setisValidAmount]=useState(true)
let amountinputref=useRef()
const onSubmitHandler=(event)=>{
  event.preventDefault();
const updatedair=amountinputref.current.value
const updair=+updatedair


if(updatedair.trim().length===0||updair>5||updair<1){
  setisValidAmount(false)
}
else{
  crtx.additemto({name:props.name,id:props.id,price:props.price,amount:updair})
}
}
  return (
    <div  className={classes.li1}>
      <div className={classes.name}>{props.name} 
      <span className={classes.sp1}>
      <Input  ref={amountinputref} isValidAmount={isValidAmount} 
      onSubmitHandler={onSubmitHandler}label={'Qty'} 
      input={{id: "qty_"+props.id,defaultValue:'1', type:'number', min:'1', max:'5'}}></Input>
      </span></div>
      <p className={classes.description}>{props.description} <span className={classes.price}>${props.price}</span></p>
    </div>
  )  
}
