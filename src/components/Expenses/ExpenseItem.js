import { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (expense) => {
  const [title, setTitle] = useState(expense.title);
  
  const handleTitleChange = () =>{ setTitle('Prueba') }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={handleTitleChange}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
