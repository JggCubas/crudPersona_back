module.exports = app => {
  const personas = require("../controlador/persona.controlador.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", personas.create);
  // Retrieve all Tutorials
  router.get("/", personas.findAll);
  // Retrieve all published Tutorials
  // router.get("/published", personas.findAllPublished);
  // // Retrieve a single Tutorial with id
  // router.get("/:id", personas.findOne);
  // // Update a Tutorial with id
  // router.put("/:id", personas.update);
  // // Delete a Tutorial with id
  // router.delete("/:id", personas.delete);
  // // Delete all Tutorials
  // router.delete("/", personas.deleteAll);
  app.use('/personas', router);
};
