import React from 'react';
import StarRatings from 'react-star-ratings';
import { Grid, Paper } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const styles = createMuiTheme({
  paper: {
    width: 5
  },
  root: {
    flexgrow: 1
  },
  typography: {
    useNextVariants: true
  }
});

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
      this.props.postReview(newReview, () => {

      });
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
      event.target.innerHTML = `Pro`;
    } else {
      event.target.innerHTML = `Con`;
    }
  }

  render (props) {
    return (
      <MuiThemeProvider theme = {styles}>
      <div id="newReviewInput" >
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Paper style={{height: '136px'}}>
              <div className="input-div">
              <br />
              <input name="username" className="input" placeholder="Your Name" onChange={event => this.handleChange(event)}></input>
              <span> Score: </span>
              <StarRatings rating={this.state.score} 
                          starRatedColor="orange" 
                          starHoverColor="orange"
                          changeRating={this.handleScoreChange.bind(this)} 
                          numberOfStars={5} 
                          name='score'
                          starDimension="20px"/>
              <br />
              <textarea className="input" style={{width: "35.5vw", height: "85px", resize: "none"}} name="body" placeholder="Write a Review" onChange={event => this.handleChange(event)}></textarea>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{height: '136px', alignSelf: "center"}}>
            <div className="pro-con-div">
              <br/>
              <span title="Toggle Pro/Con" className="pro-con" >Reliability:
              <Paper className="btn pro-con-paper" onClick={event => this.setProCon(event)} id="reliability">Pro</Paper></span><br />
              <span title="Toggle Pro/Con" className="pro-con">Durability:
              <Paper className="btn pro-con-paper" onClick={event => this.setProCon(event)} id="durability">Pro</Paper></span><br />
              <span title="Toggle Pro/Con" className="pro-con">Looks:
              <Paper className="btn pro-con-paper" onClick={event => this.setProCon(event)} id="looks">Pro</Paper></span><br />
              <span title="Toggle Pro/Con" className="pro-con">Performance:
              <Paper className="btn pro-con-paper" onClick={event => this.setProCon(event)} id="performance">Pro</Paper></span><br />
              <span title="Toggle Pro/Con" className="pro-con">Value:
              <Paper className="btn pro-con-paper" onClick={event => this.setProCon(event)} id="value">Pro</Paper></span><br />
            </div>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <div className="submitBtn btn" title="Submit Review" onClick={(event) => {this.isValidReview(event, this.state)}}>Submit</div>
        <hr className="component-div" />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default NewReviewInput;