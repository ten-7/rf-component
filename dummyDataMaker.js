const fs = require('fs');

const names = ["nfredman","zubair","jayell","jaybee","jblaize","llllinden","cornholio","AusAnder"];
const body1 = ["This was the", "I just got the most", "We could call it a", "Heavenly"];
const body2 = ["best axe", "worst product ever", "wonderful work of art", "horrendous attempt", "quizzical piece","something something something darkside"];
const body3 = ["highly recommend.", "10/10, absolutely horrible", "I didn't know I could love to hate something.", "donuts!", "puppies are soooooooooo cute!", "lmao, nonsense!"]
const theData = [];

for (let i = 0; i < 250; i++) {
  const review = {}
  review.username = names[Math.floor(Math.random()*names.length)];
  review.body = body1[Math.floor(Math.random()*body1.length)]+' '+body2[Math.floor(Math.random()*body2.length)]+', '+body3[Math.floor(Math.random()*body3.length)];
  review.score = Math.floor(Math.random()*5) + 1;
  review.proscons = {
    reliability: !!(Math.floor(Math.random()*2)),
    durability: !!(Math.floor(Math.random()*2)),
    looks: !!(Math.floor(Math.random()*2)),
    performance: !!(Math.floor(Math.random()*2)),
    value: !!(Math.floor(Math.random()*2))
  };
  review.likes = Math.floor(Math.random()*100);
  review.dislikes = Math.floor(Math.random()*100);
  review.productId = Math.floor(Math.random()*100) + 1;

  theData.push(review);
}

fs.writeFileSync('dummydata.json', JSON.stringify(theData));