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
      productId: 1,
      reviews: [],
    }
  }

  componentDidMount() {
    window.addEventListener('productId', (e) => {
      console.log("event listener here", e.detail);
      this.setState({
        productId: e.detail
      }, () => {
        axios.get('http://18.219.116.84/api/reviews/reviews', {
          params: {
            productId: this.state.productId
          }
        })
          .then((results) => {
            console.log("aqui")
            this.setState({
              reviews: results.data
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
    })

    axios.get('http://18.219.116.84/api/reviews/reviews', {
      params: {
        productId: this.state.productId
      }
    })
      .then((results) => {
        console.log("aqui")
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

    axios.put("http://18.219.116.84/api/reviews/update", updatedReviews[reviewId])
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

    axios.post('http://18.219.116.84/api/reviews/postReview', newReview)
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
    return this.state.reviews.length ? (
      <div className="review-component">
        <Grid
          container={true}
          component='div'
          justify='space-evenly'
          direction='column'
          spacing={8}
          // alightItems='center'
          >
          <NewReviewInput postReview={this.postReview.bind(this)}/>
          <ReviewList reviews={this.state.reviews} changeLikeDislike={this.incrementLikesAndDislikes.bind(this)}/>
        </Grid>
      </div>
    ) : (
      <div className="review-component">
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
          <div className="reviewList">Nothing here yet!</div>
        </Grid>
      </div>
    )
  }
}

export default App;