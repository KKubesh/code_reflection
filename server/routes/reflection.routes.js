const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM reflection`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in select menu items:', error);
        res.sendStatus(500);
    });
}); // end GET menu

// POST Route
router.post('/', (req, res) => {
    const newReflection = req.body;
    const queryText = `INSERT INTO reflection ("topic", "description", "bookmarked", "date")
                      VALUES ($1, $2, false, CURRENT_DATE)`;
    const queryValues = [
      newReflection.topic,
      newReflection.description,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;