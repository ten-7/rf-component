import React from 'react';

class CommentInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 1,
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
    
  }

  render () {
    return (
      <div>
        <input name="username" placeholder="Your Name"></input>
        <span name="1">  [*]</span>
        <span name="2">  [*]</span>
        <span name="3">  [*]</span>
        <span name="4">  [*]</span>
        <span name="5">  [*]</span><br />
        <textarea rows="5" cols="50" name="body" placeholder="Write a Review"></textarea>
      </div>
    )
  }
}

export default CommentInput;