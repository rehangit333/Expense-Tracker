import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import { getExpenses, addExpense, updateExpense, deleteExpense } from './services/expenseService';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const { data } = await getExpenses();
    setExpenses(data);
  };

  const handleAddOrUpdateExpense = async (expense) => {
    if (expense._id) {
      await updateExpense(expense._id, expense);
    } else {
      await addExpense(expense);
    }
    fetchExpenses();
  };

  const handleEdit = (expense) => {
    setSelectedExpense(expense);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();
  };

  const clearSelection = () => {
    setSelectedExpense(null);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={handleAddOrUpdateExpense} selectedExpense={selectedExpense} clearSelection={clearSelection} />
      <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
      <Dashboard expenses={expenses} />
    </div>
  );
}

export default App;
