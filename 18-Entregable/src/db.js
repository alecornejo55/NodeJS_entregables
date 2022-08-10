// const connect = require('mongodb').connect;
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://user-root:kHZZ64ppCuyBrX6g@cluster0.ekx48jm.mongodb.net/desafio18?retryWrites=true&w=majority', { useNewUrlParser: true });
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;