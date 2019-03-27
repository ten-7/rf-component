const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reviews');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Database connection error"));
db.once('open', ()=>{
  console.log('Connected to DB');
});

const repoSchema = mongoose.Schema({
  username: String,
  body: String,
  score: Number,
  proscons: {
    reliability: Boolean,
    durability: Boolean,
    looks: Boolean,
    performance: Boolean,
    value: Boolean
  },
  likes: Number,
  dislikes: Number,
  productId: Number
});

const Repo = mongoose.model("Repo", repoSchema);

const getReviewsByProductId = (selectedId, callback) => {
  Repo.find({ productId: selectedId }, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}

const postReview = (data, callback) => {
  const newReview = new Repo(data);

  newReview.save((err, res) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      console.log("successful DB post");
      callback(null, res);
    }
  });
}

module.exports = { postReview, getReviewsByProductId };