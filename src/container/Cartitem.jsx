import React from "react";
import classes from "../cssmodule/Meallistitem.module.css";

export default function Cartitem(props) {
  return (
    <div>
      {props.crtx.items.map((e) => {
        const inconeHandler = (item) => {
          return props.crtx.additemto({ ...item, amount: 1 });
        };
        const deconeHandler = (id) => {
          return props.crtx.removetocart(id);
        };
        const incutHandler = (id) => {
          return props.crtx.removetocart(id,"txt");
        };

        return (
          <div key={e.id} className={classes.li2}>
            <div className={classes.name}>
              <div className= {classes.firstrow}>
              <div>{e.name}</div>
              <div className="btn" style={{marginRight:"10px"}} ><button className={` ${classes.btnhvr} ${classes.btncrs}`} onClick={()=>incutHandler(e.id)} >x</button></div>
              </div>
              <div className= {classes.secondrow}>
              <div>qty:
              <button onClick={()=>inconeHandler(e)} className={`${classes.btnhvr} ${classes.btninc}`} >+</button>
              {e.amount}
              <button onClick={()=>deconeHandler(e.id)} className={`${classes.btnhvr} ${classes.btndec}`}>-</button>
              </div>
              <div style={{marginRight:"10px"}} >${e.price}</div>
                </div> 
              </div>
          </div>
        );
      })}
    </div>
  );
}
