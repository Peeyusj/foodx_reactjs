import React from 'react'
  import classes from"../cssmodule/mealitem.module.css"
  import Meallistitem from "./Meallistitem"
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
  
  export default function Mealitem() {
    let mealitem= DUMMY_MEALS.map((m)=>{return<Meallistitem name={m.name} price={m.price} id={m.id} description={m.description}/>})
    return (
      <div className={classes.cont}>
        <ul className={classes.ui1} >
          <li  key={DUMMY_MEALS.id}>
          {mealitem}
          </li>
        
        </ul>
      </div>
    )
  }
  