const Personas = require("../modelo/persona.modelo.js");
// Create and Save a new Tutorial
var date = new Date();
const formatDate = (date,sw)=>{
  let formatted_date;
  if(sw == 1){
    formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }else{
    formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
 return formatted_date;
}


exports.create = (req, res) => {
  // Validate request
    if (!req.body.nodo) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }


    const persona = new Personas({
        Id : null,
        Nombre : req.body.nodo.Nombre,
        Ape_Pat : req.body.nodo.Ape_Pat,
        Ape_Mat : req.body.nodo.Ape_Mat,
        Rfc : req.body.nodo.Rfc,
        Curp : req.body.nodo.Curp,
        Fecha_Nacimiento : req.body.nodo.Fecha_Nacimiento || '',
        Fecha_Alta : formatDate(date,1),
        Fecha_Modificacion : formatDate(date,2),
        Estatus_Id : req.body.nodo.Estatus_Id,
        Sexo_id : req.body.nodo.Sexo_id || '',
        Persona_Tipo_id : req.body.nodo.Persona_Tipo_id,
        Avatar : req.body.nodo.Avatar || ''

    });
    // Save Tutorial in the database
    Personas.create(persona, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    });
};
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {

  Personas.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  console.log(req);
  Personas.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Tutorial with id " + req.params.Id
          });
        }
      } else res.send({ message: `Tutorial was deleted successfully!` });
    });
};
// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
   if (!req.body.nodo) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }
   req.body.nodo.Fecha_Modificacion = formatDate(date,1);
   Personas.updateById(
     req.params.id,
     new Personas(req.body.nodo),
     (err, data) => {
       if (err) {
         if (err.kind === "not_found") {
           res.status(404).send({
             message: `Not found Tutorial with id ${req.params.id}.`
           });
         } else {
           res.status(500).send({
             message: "Error updating Tutorial with id " + req.params.id
           });
         }
       } else res.send(data);
     }
   );
};
