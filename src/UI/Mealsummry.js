import React from "react";
//import mlimage from"./assets/bg.jpg"
import classes from "../cssmodule/header.module.css";

function Mealsummry() {
  return (
    <div className={classes.sumcon}>
      <div className={classes.mealsummry} style={{ textAlign: "center" }}>
        <div>
          We have a new delicious menu to match our newly refurbished
          restaurant.
        </div>
        <div>
          So why not pop in and say hello or call up for a hassle free takeaway!
        </div>
      </div>
    </div>
  );
}

export default Mealsummry;
