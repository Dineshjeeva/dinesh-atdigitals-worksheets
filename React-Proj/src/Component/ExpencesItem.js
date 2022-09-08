import React from "react";
import ExpensesFilter from "./NewExpence/ExpenceFilter";
import ExpenseDate from "./ExpenceDate";
import "./ExpencesItem.css";
import Card from "./Card/card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
