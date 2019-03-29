import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import NewReviewInput from './NewReviewInput.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: 2,
      reviews: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/reviews', {
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

    axios.post('http://localhost:8000/postReview', newReview)
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
      <div>
        <NewReviewInput postReview={this.postReview.bind(this)}/>
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default App;