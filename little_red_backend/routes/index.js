var express = require('express');
const db = require('pg-promise')();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Create a connection to the PostgreSQL database
  const connection = {
    host: 'localhost',
    port: 5432,
    database: 'your_database',
    user: 'your_username',
    password: 'your_password'
  };

  const dbInstance = db(connection);

  // Query the table
  dbInstance.any('SELECT * FROM your_table')
    .then(data => {
      console.log(data); // Process the query results here
    })
    .catch(error => {
      console.error(error); // Handle any errors that occur during the query
    });
});

module.exports = router;
