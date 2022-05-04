const IncomingForm = require('formidable').IncomingForm
const path = require('path');
const fs = require('fs');
exports.savefile = (req, res) => {
  let newPath;
  const form = new IncomingForm();
  form.parse(req, function(err, fields, files){
        let oldPath = files.upload.filepath;
        newPath = path.join(__dirname, '../avatars_files') + '/'+files.upload.originalFilename;
        let filename = files.upload.originalFilename;
        fs.copyFile(oldPath,newPath, function (err) {
            if (err) throw err;
            return res.send({'success': true,'ruta':filename});
        });
  });
};
exports.viewfile = (req, res) => {
  let newPath = path.join(__dirname, '../avatars_files/'+req.params.filename);
  res.sendFile(newPath);
};
