const mongoose = require("mongoose");

const conn = async() => {
        await mongoose.connect("mongodb+srv://testDB:testDB@pruebas.ipbyxfk.mongodb.net/mi_blog");
        console.log("Connected to DB");
}

module.exports = {
    conn
}