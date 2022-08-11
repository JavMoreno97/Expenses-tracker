import { useState } from "react";

import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
