const task = require('./route/task.js')
const connection = require('./db.js');
const cors = require('cors')
const express = require('express');
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/task", task);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`listening on server ${PORT}....`);
    console.log(`and it's run on "http://localhost:${PORT}/api/task"`)
});