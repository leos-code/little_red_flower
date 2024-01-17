var express = require('express');
const sqlite3 = require('sqlite3').verbose();
var router = express.Router();
const ApiResponse = require('../utils/ApiResponse.js');

/**
 * @swagger
 * /add/reward:
 *   post:
 *     summary: Add a reward
 *     description: Add a new reward to the reward record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reward_name:
 *                 type: string
 *               reward_description:
 *                 type: string
 *     responses:
 *       200:
 *         description: A row has been inserted with the new reward
 */
router.post('/add/reward', function(req, res, next) {
  // Open the database
  let db = new sqlite3.Database('databases.db');

  // Execute the SELECT statement
  db.run('INSERT INTO reward_record (reward_name, reward_description) VALUES (?,?)', [req.body.reward_name, req.body.reward_description], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  // Close the database connection
  db.close();

  res.status(200).json(new ApiResponse(200, 'success', 'A row has been inserted with the new reward'));
})

/**
 * @swagger
 * /create/table:
 *   post:
 *     summary: Create reward_record table
 *     description: Create the reward_record table if it does not exist in the database
 *     responses:
 *       200:
 *         description: The reward_record table has been created successfully
 */
router.post("/create/table", function(req, res, next) {
  let db = new sqlite3.Database('databases.db');
  // Execute the CREATE TABLE statement
  db.run(`CREATE TABLE IF NOT EXISTS reward_record (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reward_name TEXT,
    reward_description TEXT
  )`);

  // Close the database connection
  db.close();
  res.status(200).json(new ApiResponse(200, 'success', 'The reward_record table has been created successfully'));
})


/**
 * @swagger
 * /reward_record/list:
 *   get:
 *     summary: Get a list of reward records
 *     description: Retrieve a list of all reward records from the database
 *     responses:
 *       200:
 *         description: A list of reward records
 */
router.get('/reward_record/list', function(req, res, next) {
  // Open the database
  let db = new sqlite3.Database('databases.db');
  const list = [];
  // Execute the SELECT statement
  db.all('SELECT * FROM reward_record', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.status(200).json(new ApiResponse(200, rows, 'Welcome to Little Red Backend'));
  });
  // Close the database connection
  db.close();
});

module.exports = router;
