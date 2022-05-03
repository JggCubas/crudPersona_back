const mysql = require("mysql");
const dbConfig = require("./configuracion.js");
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
connection.connect(error => {
  if (error) throw error;
});
module.exports = connection;
