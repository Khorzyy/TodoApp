# TodoList App

A simple Todo List application built with the MERN Stack (MongoDB, Express, React, Node.js) that allows users to add, edit, complete, and delete tasks.

---

## 🗂 Project Structure

- `client/` → contains the React frontend source code (UI)
- `server/` → contains the Express backend with MongoDB integration (API)
  - `models/` → Mongoose schema for task data
  - `routes/` → all Express route handlers
  - `db.js` → MongoDB connection setup
  - `index.js` → entry point for the server
- `App.js` → main React component that renders the task list
- `Tasks.js` → class-based component handling task logic (add, update, delete)

---

## 🚀 Getting Started

### 1. 📥 Clone the Repository
```bash
git clone https://github.com/Khorzyy/TodoApp.git
cd TodoApp
```

### 2. Start back-end server
```bash
cd ../client
npm install
npm start
```

### 3. Start front-end server
```bash
cd ../client
npm install
npm start
```

## Dependencies
<h4>Front-End: </h4>
<ul>
  <li>axios</li>
  <li>react</li>
  <li>@mui/material</li>
  <li>@emotion/react</li>
</ul>
<h4>Backend:</h4>
<ul>
  <li>express</li>
  <li>mongoose</li>
  <li>cors</li>
  <li>nodemon</li>
</ul>
