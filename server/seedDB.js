// INSERT INTO INITIAL GET REQUEST

fs.readFile(path.join(__dirname, "../dummydata.json"), (error, data) => {
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