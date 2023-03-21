import React, { useContext } from "react";
import classes from "../cssmodule/Cart.module.css";
import Modal from "../UI/Modal";
import { cartContext } from "../store/CartContext";
import Cartitem from "./Cartitem";

const Cart = (props) => {
  const crtx = useContext(cartContext);
 return (
    <Modal onClick={props.onClick}>
      <div className={classes.cont}>
        <div className={classes.ui1}>
          
            {!crtx.items.length ? 
              <div className={classes.cartbox} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"yellow"}}>
                <div  >CART IS EMPTY </div>
                <button onClick={props.onClick} className={`${classes.clo} ${classes.btnhvr}`} style={{marginTop:"10px"}} >close</button>
              </div>
             : 
             <>
              <Cartitem crtx={crtx}/>
              <hr />
            <span className={classes.lb}>
              <button onClick={props.onClick} className={`${classes.clo} ${classes.btnhvr}`}>Close</button>
              <button  className={`${classes.order} ${classes.btnhvr}`}>Order</button>
            </span>
            <span className={classes.tp}>SubTotal:{crtx.amount}</span>
            </>}
           </div>
      </div>
    </Modal>
  );
};

export default Cart;
