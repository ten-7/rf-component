import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import CommentInput from './CommentInput.jsx';

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

  handleChange (event) {
    event.preventDefault();

    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  addComment (event) {
    event.preventDefault();

    
  }

  render() {
    return (
      <div>
        <CommentInput />
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }
}

export default App;