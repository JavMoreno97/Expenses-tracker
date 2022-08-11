import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ handleExpenseAdd }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleCloseForm = () => { setOpenForm(false) }

  return (
    <div className="new-expense">
      {!openForm && <button type="button" onClick={() => setOpenForm(true)}>Add New Expense</button>}
      {openForm && <ExpenseForm onExpenseAdd={handleExpenseAdd} onCloseForm={handleCloseForm}/>}
    </div>
  );
};

export default NewExpense;
