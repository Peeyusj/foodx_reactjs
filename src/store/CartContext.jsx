import React, { createContext, useReducer } from "react";
export const cartContext = React.createContext({});

const defaultstate = {
  item: [],
  totalAmount: 0,
};
const reducerfn = (state, action) => {
  if (action.type === "ADD") {
    let updamnt = +state.totalAmount + action.item.price * action.item.amount;
    let updatedtotalAmount = updamnt.toFixed(2);
    let existingel = state.item.findIndex((item) => item.id === action.item.id);
    let existingitem = state.item[existingel];
    let updatedItems;
    if (existingitem) {
      const updatedItem = {
        ...existingitem,
        amount: existingitem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingel] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }
    return {
      item: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  } else if (action.type === "Remove") {
    let existingel = state.item.findIndex((item) => item.id === action.id);
    let existingitem = state.item[existingel];
    let updatedItems;
    if(action.msg&&(existingitem.amount>1)) {
      updatedItems = [...state.item];
      updatedItems = updatedItems.filter((e) => e.id!==action.id);
      let updamnt = +state.totalAmount - existingitem.price*existingitem.amount;
      var updatedtotalAmount = updamnt.toFixed(2);
      console.log("hii");
    }
    else if (existingitem.amount > 1) {
      const updatedItem = {
        ...existingitem,
        amount: existingitem.amount - 1,
      };
      updatedItems = [...state.item];
      updatedItems[existingel] = updatedItem;
      let updamnt = +state.totalAmount - existingitem.price;
      var updatedtotalAmount = updamnt.toFixed(2);
    }
     else{
      updatedItems = [...state.item];
      updatedItems = updatedItems.filter((e) => e.id !== action.id);
      let updamnt = +state.totalAmount - existingitem.price;
      var updatedtotalAmount = updamnt.toFixed(2);
}
    return {
      item: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  } else {
    return defaultstate;
  }
};

export function CartContext(props) {
  const [CartState, dispatchaction] = useReducer(reducerfn, defaultstate);
  const additemtocart = (item) => {
    dispatchaction({ type: "ADD", item: item });
  };
  const removeitemtocart = (id,mg) => {
    dispatchaction({ type: "Remove", id: id, msg:mg });
  };
  const crtctnx = {
    items: CartState.item,
    amount: CartState.totalAmount,
    additemto: additemtocart,
    removetocart: removeitemtocart,
  };
  return (
    <cartContext.Provider value={crtctnx}>
      {props.children}
    </cartContext.Provider>
  );
}
