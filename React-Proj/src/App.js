import React, { useState } from "react";
import NewExpence from "./Component/NewExpence/NewExpence";
import "./Component/Expence.css";
import Data from "./Component/Data";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [axpenses, setExpenses] = useState(expenses);
  const addExpenseHandler = (expenses) => {
    console.log(expenses);
    setExpenses((preExpenses) => {
      return [expenses, ...preExpenses];
    });
  };
  console.log(axpenses);
  return (
    <div>
      <NewExpence onAddExpense={addExpenseHandler} />
      <Data expenses={axpenses} />
    </div>
  );
};

export default App;
