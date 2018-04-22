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
}); // end GET reflection

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
        console.log('Error completing SELECT reflection query', err);
        res.sendStatus(500);
      });
  }); // end POST reflection

  // PUT route
  router.put('/', (req,res) => {
      const bookmarkItem = req.body;
      console.log(bookmarkItem);
      const queryText = `UPDATE reflection SET "bookmarked" = $1 WHERE id=$2`;
      const queryValues = [
        bookmarkItem.bookmarked,
        bookmarkItem.id
      ];
      pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201);
      }).catch((err) => {
          console.log('Error completing PUT reflection query', err);
          res.sendStatus(500);
      });
  }) // end of PUT route

  router.delete('/', (req,res) => {
    console.log(req.query.id);
    
    const queryText = 'DELETE FROM reflection WHERE id=$1';
    pool.query(queryText, [req.query.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE reflection query', err);
        res.sendStatus(500);
      });
  })

module.exports = router;