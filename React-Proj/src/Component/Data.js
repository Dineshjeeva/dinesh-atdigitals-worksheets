import React, { useState } from "react";
import ExpensesItem from "./ExpencesItem";
import ExpensesFilter from "./NewExpence/ExpenceFilter";
import ExpensesChart from "./ExpensiveChart";

const Data = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpences = props.expenses.filter((filter) => {
    return filter.date.getFullYear().toString() === filteredYear;
  });

  console.log(setFilteredYear);
  return (
    <div className="secbox">
      <card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpences} />

        {filteredExpences.length === 0 ? (
          <p style={{ color: "red" }}>No expense Found</p>
        ) : (
          filteredExpences.map((expenses) => (
            <ExpensesItem
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))
        )}
      </card>
    </div>
  );
};
export default Data;
