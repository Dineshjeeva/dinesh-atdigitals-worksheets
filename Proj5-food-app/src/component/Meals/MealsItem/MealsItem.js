import React from "react";
import { useContext } from "react";
import CardContext from "../../../store/card-context";

import MealItemForm from "./MealItemForm";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const cartCtx = useContext(CardContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    console.log(amount);
    console.log(cartCtx);
    cartCtx.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h1>{props.name}</h1>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealsItem;
