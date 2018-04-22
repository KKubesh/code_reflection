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

module.exports = router;