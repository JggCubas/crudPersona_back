const sql = require("../db/coneccion.js");
// constructor
const Personas = function(personas) {
  this.title = personas.title;
  this.description = personas.description;
  this.published = personas.published;
};
Personas.create = (newPersona, result) => {
  sql.query("INSERT INTO Persona SET ?", newPersona, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Personas.getAll = (result) => {
  let query = "SELECT * FROM Persona";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};
module.exports = Personas;
