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

### 1. Clone the repository
```bash
git clone https://github.com/your-username/TodoApp.git
cd todolist-app

### 2. Start back-end server
```bash
cd ../client
npm install
npm start

### 3. Start front-end server
```bash
cd ../client
npm install
npm start