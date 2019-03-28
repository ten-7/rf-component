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

  fs.readFile(path.join(__dirname, "../dummydata.json"), (err, result) => {
    if (err) {
      console.error(err);
    } else {
      
    }
  })

  db.getReviewsByProductId(req.query.productId, (error, results) => {
    if (error) {
      console.error(error);
      res.end();
    } else {
      res.send(results);
    }
  });
});