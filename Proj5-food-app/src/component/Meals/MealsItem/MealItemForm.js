import React from "react";
import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const eneterdAmount = amountInputRef.current.value;
    const eneterdAmountnumber = +eneterdAmount;
    if (
      eneterdAmount.trim().length === 0 ||
      eneterdAmountnumber < 1 ||
      eneterdAmountnumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(eneterdAmountnumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter the valid amoutn (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
