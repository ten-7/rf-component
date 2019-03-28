import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: 1,
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

  render() {
    return (
      <div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default App;