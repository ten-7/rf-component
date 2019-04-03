const express = require('express');
const db = require('../database/db.js');
const cors = require('cors');

const app = express();

app.use(express.static('dist'))
app.use(express.json());
app.use(cors());

let port = process.env.PORT || 3000;

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

app.put('/reviews/update', (req, res) => {
  db.updateReview(req.body, (error, result) => {
    if(error) {
      console.error(error);
      res.end();
    } else {
      console.log("success!")
      res.end()
    }
  })
})

app.post('/secret', (req, res) => {
  req.body.map(review => {
    db.postReview(review, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        console.log('success');
      }
      res.end();
    })
  })
})

app.listen(port, (err, result) => {
  if (err) {
    console.error(err);
  } else {
  console.log(`The army of ${port} has arrived!`);
  }
});