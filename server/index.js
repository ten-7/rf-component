const express = require('express');
const db = require('../database/db.js');
const fs = require('file-system');
const path = require('path');

const app = express();

app.use(express.static('dist'))
app.use(express.json());

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The army of ${port} has arrived!`);
});

app.get('/reviews', (req, res) => {
  // req.query.productId

  db.getReviewsByProductId(req.query.productId, (error, results) => {
    if (error) {
      console.error(error);
      res.end();
    } else {
      res.send(results);
    }
  });
});

app.post('/postReview', (req, res) => {
  db.postReview(req.body, (error, result) => {
    if (error) {
      console.error(error);
      res.end();
    } else {
      res.send(result);
    }
  })
});