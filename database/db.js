const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://Aikeus:${process.env.MONGO_PW}@cluster0-wp7g3.mongodb.net/reviews?retryWrites=true`);

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
  productId: Number,
  reviewId: Number
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

const updateReview = (data, callback) => {
  Repo.updateOne({ _id: data._id }, data, (error, response) => {
    if (error) {
      console.error(error);
      callback(error);
    } else {
      callback(null, response)
    }
  });
}

module.exports = { postReview, getReviewsByProductId, updateReview };