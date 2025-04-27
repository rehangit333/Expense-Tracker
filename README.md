
---

# Expense Tracker Application

This is a full-stack **Expense Tracker Application** built as part of the SDE Intern assignment.  
The application allows users to record their expenses, manage them efficiently, and visualize their spending patterns through intuitive charts.

---

## Features

- Add, Edit, and Delete expenses.
- View all expense records in a table.
- Visualize expenses with:
  - **Pie Chart** (Category-wise distribution)
  - **Bar Chart** (Monthly expenses)
- Responsive and user-friendly frontend.
- Clean and maintainable backend with RESTful APIs.

---

## Technologies Used

| Stack     | Technology                           |
|-----------|--------------------------------------|
| Frontend  | React.js, Axios, Chart.js (via react-chartjs-2) |
| Backend   | Node.js, Express.js                  |
| Database  | MongoDB Atlas                        |
| Others    | Mongoose, CORS, Dotenv, Nodemon, Postman (for API testing) |

---

## Project Structure

```
expense-tracker-backend/
    server.js
    models/
        Expense.js
    routes/
        expenses.js
    .env
    package.json

expense-tracker-frontend/
    src/
        App.js
        components/
            ExpenseForm.js
            ExpenseList.js
            Dashboard.js
        services/
            expenseService.js
        App.css
    package.json
```

---

## Setup Instructions

### 1. Backend Setup (Node.js + Express)

- Navigate to the backend folder:

```bash
cd expense-tracker-backend
```

- Install backend dependencies:

```bash
npm install
```

- Create a `.env` file inside `expense-tracker-backend/`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

- Start the backend server:

```bash
npm run dev
```

Server will run at `http://localhost:5000`.

---

### 2. Frontend Setup (React.js)

- Navigate to the frontend folder:

```bash
cd expense-tracker-frontend
```

- Install frontend dependencies:

```bash
npm install
```

- Start the React frontend:

```bash
npm start
```

App will run at `http://localhost:3000`.

---

## API Documentation (Backend)

| Method | Endpoint          | Description                        |
|--------|-------------------|------------------------------------|
| POST   | `/expenses`        | Add a new expense                  |
| GET    | `/expenses`        | Retrieve all expenses             |
| PUT    | `/expenses/:id`    | Update an existing expense by ID  |
| DELETE | `/expenses/:id`    | Delete an expense by ID            |

---

## Visualization

- **Pie Chart:** Displays the distribution of expenses across different categories.
- **Bar Chart:** Displays monthly total expenses.

---

## Folder-Wise Explanation

| Folder/File              | Purpose                                   |
|---------------------------|-------------------------------------------|
| models/Expense.js         | MongoDB model schema for expenses         |
| routes/expenses.js        | API routes to manage expenses             |
| services/expenseService.js | Axios API calls for frontend              |
| components/ExpenseForm.js | Form to add or edit an expense            |
| components/ExpenseList.js | Table listing all expenses                |
| components/Dashboard.js   | Pie chart and bar chart visualization     |
| App.js                    | Main frontend component                  |

---

## How It Works (Flow)

1. User opens frontend at `localhost:3000`.
2. User adds, edits, or deletes expenses through the form.
3. React frontend makes API requests to backend (`localhost:5000/expenses`).
4. Backend interacts with MongoDB Atlas to fetch/save/update/delete expense data.
5. Updated data is displayed on frontend tables and visualized using charts.

---

## Important Notes

- Serial Numbers (`serialNumber`) are auto-generated and adjusted properly after adding/deleting expenses.
- MongoDB Atlas is used as a cloud database.
- Backend and frontend run on different ports during development (`5000` and `3000`).
- CORS is enabled to allow communication between React frontend and Node backend.

---

## Full List of Installed Dependencies

### Backend (`expense-tracker-backend/`)

- express
- mongoose
- cors
- body-parser
- dotenv
- nodemon (for development)

### Frontend (`expense-tracker-frontend/`)

- react@18.2.0
- react-dom@18.2.0
- axios
- chart.js@4.4.0
- react-chartjs-2@5.2.0

> Install frontend dependencies individually if needed:

```bash
npm install react@18.2.0 react-dom@18.2.0
npm install axios
npm install chart.js@4.4.0 react-chartjs-2@5.2.0
```

---

## Submission Guidelines

- Push the entire source code (both frontend and backend) to a GitHub repository.
- Include this README file at the root of the repository.
- Share the GitHub repository link as per instructions.

---

> **Made with using React, Node.js, Express, and MongoDB**

---

  
---
  
