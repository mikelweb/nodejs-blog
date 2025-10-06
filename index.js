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

// Routes
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint /probando");

    return res.status(200).send(`
        <h1>Endpoint /probando</h1>
    `);
})

app.get("/probandojson", (req, res) => {
    console.log("Se ha ejecutado el endpoint /probandojson");

    return res.status(200).json(
        [
            {
                "nombre":"Python",
                "horas":25,
                "dificultad":"media"
            }
        ]    
    );
})

// Run server and listen on port 3900
app.listen(port, () => {
    console.log("Server running on port " + port)
});