import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseAdd, onCloseForm }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setNewAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    onExpenseAdd(expenseData);
    onCloseForm();

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  //SINGLE STATE APPROACH (NOTES ONLY)
  // const [userInput, setUserInput] = useState({
  //   newTitle: "",
  //   newAmount: "",
  //   newDate: "",
  // });

  // const handleTitleChange = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, newTitle: e.target.value };
  //   })
  // };

  // const handleAmountChange = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, newAmount: e.target.value };
  //   });
  // };

  // const handleDateChange = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, newDate: e.target.value };
  //   });
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={newDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button  type="button" onClick={onCloseForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
