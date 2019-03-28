import React from 'react';

class NewReviewInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      username: "",
      body: "",
      proscons: {
        reliability: true,
        durability: true,
        looks: true,
        performance: true,
        value: true
      }
    }
  }

  handleChange (event) {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value;
    })
  }

  handleScoreChange (event, newScore) {
    event.preventDefault();

    this.setState({
      score: newScore
    });

    for(let i = 1; i <= 5; i++) {
      if (i <= newScore) {
        document.getElementById(`star${i}`).innerHTML = " [*]";
      } else {
        document.getElementById(`star${i}`).innerHTML = " [0]";
      }
    }
  }

  render () {
    return (
      <div name="newReviewInput">
        <input name="username" placeholder="Your Name"></input>
        <span> Score: </span>
        <span id="star1" onClick={(event) => {this.handleScoreChange(event, 1)}}> [0]</span>
        <span id="star2" onClick={(event) => {this.handleScoreChange(event, 2)}}> [0]</span>
        <span id="star3" onClick={(event) => {this.handleScoreChange(event, 3)}}> [0]</span>
        <span id="star4" onClick={(event) => {this.handleScoreChange(event, 4)}}> [0]</span>
        <span id="star5" onClick={(event) => {this.handleScoreChange(event, 5)}}> [0]</span><br />
        <textarea rows="5" cols="50" name="body" placeholder="Write a Review"></textarea>
      </div>
    )
  }
}

export default NewReviewInput;