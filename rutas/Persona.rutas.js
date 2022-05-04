module.exports = app => {
  const personas = require("../controlador/persona.controlador.js");
  const upload = require("../controlador/uploadfile.js");
  var router = require("express").Router();
  router.post("/", personas.create);
  router.get("/", personas.findAll);
  router.put("/:id", personas.update);
  router.delete("/:id", personas.delete);
  router.post('/uploadfile', upload.savefile);
  router.get('/getAvatar/:filename', upload.viewfile);
  app.use('/personas', router);
};
