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

