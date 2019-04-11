import React from 'react';
import StarRatings from 'react-star-ratings';
import Typography from '@material-ui/core/Typography';

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

    let newString = event.target.id;
    newString = newString.charAt(0).toUpperCase() + newString.slice(1);

    this.setState({ 
      proscons: newProsCons
    });

    if(newProsCons[event.target.id]) {
      event.target.innerHTML = `${newString}: Pro`;
    } else {
      event.target.innerHTML = `${newString}: Con`;
    }
  }

  // render () {
  //   return (
  //     <div id="newReviewInput">
  //       <Grid container>
  //         <Grid>
  //         <input name="username" placeholder="Your Name" onChange={event => this.handleChange(event)}></input>
  //         </Grid>
  //         <Grid>
  //         <span> Score: </span>
  //         <StarRatings rating={this.state.score} 
  //                     starRatedColor="orange" 
  //                     starHoverColor="orange"
  //                     changeRating={this.handleScoreChange.bind(this)} 
  //                     numberOfStars={5} 
  //                     name='score'
  //                     starDimension="20px"/>
  //         </Grid>
  //         <br />
  //         <textarea rows="5" cols="50" name="body" placeholder="Write a Review" onChange={event => this.handleChange(event)}></textarea><br />
  //           <div onClick={event => this.setProCon(event)} id="reliability">Reliability: Pro</div>
  //           <div onClick={event => this.setProCon(event)} id="durability">Durability: Pro</div>
  //           <div onClick={event => this.setProCon(event)} id="looks">Looks: Pro</div>
  //           <div onClick={event => this.setProCon(event)} id="performance">Performance: Pro</div>
  //           <div onClick={event => this.setProCon(event)} id="value">Value: Pro</div>
  //         <div className="submitBtn btn" onClick={(event) => {this.isValidReview(event, this.state)}}>Submit</div>
  //       </Grid>
  //       <hr className="component-div" />
  //     </div>
  //   )
  // }

  render () {
    return (
      <div id="newReviewInput">
        <input name="username" placeholder="Your Name" onChange={event => this.handleChange(event)}></input>
        <span> Score: </span>
        <StarRatings rating={this.state.score} 
                    starRatedColor="orange" 
                    starHoverColor="orange"
                    changeRating={this.handleScoreChange.bind(this)} 
                    numberOfStars={5} 
                    name='score'
                    starDimension="20px"/>
        <br />
        <textarea rows="5" cols="50" name="body" placeholder="Write a Review" onChange={event => this.handleChange(event)}></textarea><br />
          <div title="Toggle Pro/Con" className="btn" onClick={event => this.setProCon(event)} id="reliability">Reliability: Pro</div>
          <div title="Toggle Pro/Con" className="btn" onClick={event => this.setProCon(event)} id="durability">Durability: Pro</div>
          <div title="Toggle Pro/Con" className="btn" onClick={event => this.setProCon(event)} id="looks">Looks: Pro</div>
          <div title="Toggle Pro/Con" className="btn" onClick={event => this.setProCon(event)} id="performance">Performance: Pro</div>
          <div title="Toggle Pro/Con" className="btn" onClick={event => this.setProCon(event)} id="value">Value: Pro</div>
        <div className="submitBtn btn" title="Submit Review" onClick={(event) => {this.isValidReview(event, this.state)}}>Submit</div>
        <hr className="component-div" />
      </div>
    )
  }
}

export default NewReviewInput;