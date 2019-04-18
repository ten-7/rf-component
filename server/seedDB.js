// INSERT INTO INITIAL GET REQUEST

const fs = require('fs');
const db = require('../database/db.js')

fs.readFile("../dummydata.json", (error, data) => {
  if (error) {
    console.error(error)
  } else {
    data = JSON.parse(data);
    data.map((review, index) => {
      db.postReview(review, (error, result) => {
        if (error) {
          console.error(error);
        } else {
          console.log("success", index);
        }
      })
    })
  }
})