const db = require('./pg-db-config.js');

const getReviewsByProductId = (selectedId, callback) => {
  console.log(selectedId)
  const inquery = `SELECT * FROM public.reviews WHERE productId = ${selectedId} LIMIT 5;`;

  db.query(inquery, (err, result) => {
    if (err) throw err;
    else {
      console.log('here we go!', result.rows[0])
      callback(null, result.rows);
    }
  });
}

const getAllReviews = (callback) => {
  const inquery = `SELECT * FROM public.reviews LIMIT 100`;

  db.query(inquery, (err, result) => {
    if (err) throw err;
    else {
      callback(result);
    }
  });
}

// const postReview = (content, callback) => {
//   const inquery = `INSERT INTO public.reviews VALUES (
//     content.
//   )`
// }

module.exports = { getReviewsByProductId, getAllReviews };