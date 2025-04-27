import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmit, selectedExpense, clearSelection }) => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    if (selectedExpense) {
      setExpense(selectedExpense);
    }
  }, [selectedExpense]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expense);
    setExpense({ amount: '', category: '', description: '', date: '' });
    clearSelection();
  };

  return (
    <div className="form-container">
      <h2>{selectedExpense ? "Edit Expense" : "Add Expense"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={expense.category} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} />
        <input type="date" name="date" value={expense.date} onChange={handleChange} required />
        <button type="submit">{selectedExpense ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
