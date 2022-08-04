import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ handleExpenseAdd }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseAdd={handleExpenseAdd} />
    </div>
  );
};

export default NewExpense;
