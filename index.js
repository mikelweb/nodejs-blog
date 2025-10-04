const express = require("express");
const cors = require("cors");


// Node server
const app = express();
// Server port
const port = 3900;

// Configure CORS
app.use(cors());

// Convert body to JS Obj
app.use(express.json());

// Run server and listen on port 3900
app.listen(port, () => {
    console.log("Server running on port " + port)
});