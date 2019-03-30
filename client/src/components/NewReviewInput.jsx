import React from 'react';
import StarRatings from 'react-star-ratings';

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


  handleScoreChange (newScore) {
    // event.preventDefault();

    this.setState({
      score: newScore
    });

    // for(let i = 1; i <= 5; i++) {
    //   if (i <= newScore) {
    //     document.getElementById(`star${i}`).innerHTML = " [*]";
    //   } else {
    //     document.getElementById(`star${i}`).innerHTML = " [0]";
    //   }
    // }
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
      <div id="newReviewInput">
        <input name="username" placeholder="Your Name" onChange={event => this.handleChange(event)}></input>
        <span> Score: </span>
        <StarRatings rating={this.state.score} 
                    starRatedColor="a00000" 
                    starHoverColor="a00000"
                    changeRating={this.handleScoreChange.bind(this)} 
                    numberOfStars={5} 
                    name='score'
                    starDimension="20px"/><br />
        <textarea rows="5" cols="50" name="body" placeholder="Write a Review" onChange={event => this.handleChange(event)}></textarea><br />
        <span onClick={event => this.setProCon(event)} id="reliability"> P</span>
        <span onClick={event => this.setProCon(event)} id="durability"> P</span>
        <span onClick={event => this.setProCon(event)} id="looks"> P</span>
        <span onClick={event => this.setProCon(event)} id="performance"> P</span>
        <span onClick={event => this.setProCon(event)} id="value"> P</span>
        <div className="submitBtn btn" onClick={(event) => {this.isValidReview(event, this.state)}}>corn</div>
      </div>
    )
  }
}

export default NewReviewInput;