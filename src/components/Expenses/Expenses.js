import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState('2022');

  const handleFilterUpdate = newFilter => {
    setFilter(newFilter);
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selectedFilter={filter} onFilterUpdate={handleFilterUpdate} />
      {filteredExpenses.map( expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
