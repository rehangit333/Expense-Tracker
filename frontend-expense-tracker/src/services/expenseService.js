import axios from 'axios';

const API_URL = 'http://localhost:5000/expenses';

export const getExpenses = () => axios.get(API_URL);
export const addExpense = (expense) => axios.post(API_URL, expense);
export const updateExpense = (id, updatedExpense) => axios.put(`${API_URL}/${id}`, updatedExpense);
export const deleteExpense = (id) => axios.delete(`${API_URL}/${id}`);
