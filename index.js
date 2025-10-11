const { conn } = require("./database/conn");
const express = require("express");
const cors = require("cors");

// DB connection
conn();

// Node server
const app = express();
// Server port
const port = 3900;

// Configure CORS
app.use(cors());

// Convert body to JS Obj
app.use(express.json());

// Article routes
const articleRoutes = require("./routes/article");
app.use("/api", articleRoutes);

// Run server and listen on port 3900
app.listen(port, () => {
    console.log("Server running on port " + port)
});