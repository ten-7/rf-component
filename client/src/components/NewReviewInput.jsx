import React from 'react';
import axios from 'axios';

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
      [event.target.name]: event.target.value
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

  isValidReview(event, newReview) {
    event.preventDefault();

    if(newReview.score === 0 || newReview.username === "" || newReview.body === "") {
      alert("Please fully complete your review!");
    } else {
      this.props.postReview(newReview);
    }
  }

  setProCon(event) {
    event.preventDefault();

    let newProsCons = this.state.proscons;
    newProsCons[event.target.id] = !newProsCons[event.target.id];

    this.setState({ 
      proscons: newProsCons
    });

    if(newProsCons[event.target.id]) {
      event.target.innerHTML = " P";
    } else {
      event.target.innerHTML = " C";
    }
  }

  render () {
    return (
      <div name="newReviewInput">
        <input name="username" placeholder="Your Name" onChange={event => this.handleChange(event)}></input>
        <span> Score: </span>
        <span id="star1" onClick={(event) => {this.handleScoreChange(event, 1)}}> [0]</span>
        <span id="star2" onClick={(event) => {this.handleScoreChange(event, 2)}}> [0]</span>
        <span id="star3" onClick={(event) => {this.handleScoreChange(event, 3)}}> [0]</span>
        <span id="star4" onClick={(event) => {this.handleScoreChange(event, 4)}}> [0]</span>
        <span id="star5" onClick={(event) => {this.handleScoreChange(event, 5)}}> [0]</span><br />
        <textarea rows="5" cols="50" name="body" placeholder="Write a Review" onChange={event => this.handleChange(event)}></textarea><br />
        <span onClick={event => this.setProCon(event)} id="reliability"> P</span>
        <span onClick={event => this.setProCon(event)} id="durability"> P</span>
        <span onClick={event => this.setProCon(event)} id="looks"> P</span>
        <span onClick={event => this.setProCon(event)} id="performance"> P</span>
        <span onClick={event => this.setProCon(event)} id="value"> P</span>
        <div onClick={(event) => {this.isValidReview(event, this.state)}}>corn</div>
      </div>
    )
  }
}

export default NewReviewInput;