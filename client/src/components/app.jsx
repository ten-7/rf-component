import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: 2
    }
  }

  componentDidMount() {
    console.log("we in this bitch")
    axios.get('/reviews', {
      productId: this.state.productId
    })
      .then((results) => {
        console.log("successful get request", results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>FLYING HIGH!</div>
    )
  }
}

export default App;