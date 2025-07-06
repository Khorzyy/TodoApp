const mongoose = require('mongoose');

module.exports = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/TodoList");
        console.log("connected to database");
    } catch (error) {
        console.log("couldn't connected to database", error)
    }
};