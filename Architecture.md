
---

# Expense Tracker Application — Architecture & Flow Document

---

## Architecture Overview

The **Expense Tracker** is a **full-stack web application**:
- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **Communication**: RESTful APIs

It follows a **client-server architecture** where:
- The frontend (React) interacts with the backend (Express) using HTTP requests.
- The backend processes requests, communicates with the database (MongoDB), and sends responses.
- Frontend updates the UI based on API responses, including dynamic charts.

---

## Key Components

| Layer         | Technologies | Purpose                                      |
|---------------|--------------|----------------------------------------------|
| Frontend      | React.js, Axios, react-chartjs-2 | User interface, form handling, chart visualization |
| Backend       | Node.js, Express.js | API development           |
| Database      | MongoDB Atlas | Persistent storage of expense data           |
| Communication | REST APIs, Axios | Connects frontend and backend                |

---

## Application Flow

1. **Frontend Initialization**:
   - User accesses the React frontend at `http://localhost:3000`.
   - React app loads the Dashboard, Expense Form, and Expense List components.

2. **Adding an Expense**:
   - User fills the **ExpenseForm** and submits.
   - React sends a **POST** request via Axios to `http://localhost:5000/expenses`.
   - Backend validates and saves the data to MongoDB Atlas.

3. **Fetching Expenses**:
   - On Dashboard load (or after updates), React sends a **GET** request to `http://localhost:5000/expenses`.
   - Backend retrieves all expenses from MongoDB and returns JSON data.
   - React displays the expenses in a table (ExpenseList) and charts (Dashboard).

4. **Editing an Expense**:
   - User clicks "Edit" on an expense entry.
   - Pre-fills the form with existing data.
   - User submits the updated form.
   - React sends a **PUT** request to `http://localhost:5000/expenses/:id`.
   - Backend updates the document in MongoDB.

5. **Deleting an Expense**:
   - User clicks "Delete" on an expense entry.
   - React sends a **DELETE** request to `http://localhost:5000/expenses/:id`.
   - Backend removes the document from MongoDB.

6. **Data Visualization**:
   - After any update, charts automatically re-render:
     - **Pie Chart**: Category-wise distribution.
     - **Bar Chart**: Monthly total expenses.

---

## Summary of Flow (in one line)

> React frontend → sends API requests → Node.js + Express backend → performs database operations on MongoDB → sends response → React updates UI and charts.

---
