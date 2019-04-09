import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import NewReviewInput from './NewReviewInput.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: Math.ceil(Math.random() * 100),
      reviews: []
    }
  }

  componentDidMount() {
    axios.get('/reviews', {
      params: {
        productId: this.state.productId
      }
    })
      .then((results) => {
        this.setState({
          reviews: results.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  incrementLikesAndDislikes (event, reviewId, type) {
    event.preventDefault();

    const updatedReviews = this.state.reviews;

    updatedReviews[reviewId][type]++;

    axios.put("/reviews/update", updatedReviews[reviewId])
      .then((result) => {
        this.setState({
          reviews: updatedReviews
        })
      })
      .catch((error) => {
        alert('something went wrong!')
      })
  }

  handleChange (event) {
    event.preventDefault();

    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  postReview (newReview) {
    newReview.likes = 0;
    newReview.dislikes = 0;
    newReview.productId = this.state.productId;

    axios.post('/postReview', newReview)
      .then((response) => {
        const updatedReviews = this.state.reviews;
        updatedReviews.unshift(newReview);
        this.setState({
          reviews: updatedReviews
        });
      })
      .catch((error) => {
        alert('Something happened when posting your review :(');
      });
  }

  render() {
    return (
      <div className="reviewComponent">
        <Grid
          container={true}
          component='div'
          justify='space-evenly'
          direction='column'
          spacing={8}
          alightItems='center'
          style={{
            textAlign: "center"
          }}
          >
          <NewReviewInput postReview={this.postReview.bind(this)}/>
          <ReviewList reviews={this.state.reviews} changeLikeDislike={this.incrementLikesAndDislikes.bind(this)}/>
        </Grid>
      </div>
    )
  }
}

export default App;