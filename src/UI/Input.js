import React from 'react'
import classes from "../cssmodule/Cart.module.css"

 const Input=React.forwardRef((props,ref)=> {
  return (
    <div>
       <div>
        <form onSubmit={props.onSubmitHandler}>
        <button className={classes.btn} style={{color:"whitesmoke",backgroundColor:"#57c2a538",borderRadius:'10px',height:'33px',width:'53px',}}>+Add</button>
        {/* {!props.isValidAmount&&alert("enter amount between 1 to 5")} */}
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} ></input>
        
        </form>
    </div>
    </div>
  )

})
export default Input
