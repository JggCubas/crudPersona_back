const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json({limit: '50mb'}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "CRUd personas." });
});
require("./rutas/Persona.rutas.js")(app);
// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
