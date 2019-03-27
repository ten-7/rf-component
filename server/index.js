const express = require('express');
const db = require('../database/db.js');

const app = express();

app.use(express.static('../dist/'))
app.use(express.json());

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The army of ${port} has arrived!`);
});

app.get('/reviews', (req, res) => {
  console.log('aqui');
  res.end();
})

app.get('/', (req, res) => {
  res.send();
})