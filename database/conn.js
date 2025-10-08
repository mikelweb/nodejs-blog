const mongoose = require("mongoose");

const conn = async() => {
    try {
        await mongoose.connect("mongodb+srv://testDB:testDB@pruebas.ipbyxfk.mongodb.net/mi_blog");
        console.log("Connected to DB");
    } catch(error) {
        console.log(error);
        throw new Error("Failed to connect DB");
    }
}

module.exports = {
    conn
}