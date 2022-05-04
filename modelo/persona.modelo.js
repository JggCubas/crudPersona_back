const sql = require("../db/coneccion.js");
// constructor
const Personas = function(personas) {
  this.Id = personas.Id;
  this.Nombre = personas.Nombre;
  this.Ape_Pat = personas.Ape_Pat;
  this.Ape_Mat = personas.Ape_Mat;
  this.Rfc = personas.Rfc;
  this.Curp = personas.Curp;
  this.Fecha_Nacimiento = personas.Fecha_Nacimiento;
  this.Fecha_Alta = personas.Fecha_Alta;
  this.Fecha_Modificacion = personas.Fecha_Modificacion;
  this.Estatus_Id = personas.Estatus_Id;
  this.Sexo_id = personas.Sexo_id;
  this.Persona_Tipo_id = personas.Persona_Tipo_id;
  this.Avatar = personas.Avatar;
};
Personas.create = (newPersona, result) => {
  sql.query("INSERT INTO Persona SET ?", newPersona, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    newPersona.Id = res.insertId;
    result(null, { ...newPersona });
  });
};

Personas.getAll = (result) => {
  let query = "SELECT * FROM Persona";
  sql.query(query, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};
Personas.remove = (id, result) => {
  sql.query("DELETE FROM Persona WHERE Id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};
Personas.updateById = (id, persona, result) => {


  sql.query(
    "UPDATE Persona SET Nombre = ?,Ape_Pat = ?,Ape_Mat = ?,Rfc = ?,Curp = ?,Fecha_Nacimiento = ?,Fecha_Modificacion = ?,Estatus_Id = ?,Sexo_id = ?,Persona_Tipo_id = ?,Avatar = ? WHERE id = ?",
    [persona.Nombre,persona.Ape_Pat,persona.Ape_Mat,persona.Rfc,persona.Curp,persona.Fecha_Nacimiento,persona.Fecha_Modificacion,persona.Estatus_Id,persona.Sexo_id,persona.Persona_Tipo_id,persona.Avatar, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, {  ...persona });
    }
  );
};
module.exports = Personas;
