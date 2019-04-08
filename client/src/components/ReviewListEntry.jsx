import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewListEntry = (props) => {
  let id = `entry${props.index}`
  return (
    <div id={id} className="entry">
      <div>
        <span>{props.review.username}</span>
        <span> | <StarRatings 
                    rating={props.review.score} 
                    starRatedColor="orange"
                    starDimension="15px"/></span>
      </div>
        <hr className="subcomment-div"/>
      <div className="body">
        {props.review.body}
      </div>
        <hr className="subcomment-div"/>
      <div>
        <span className="likes" onClick={(event) => { props.changeLikeDislike(event, props.index, "likes") }}>Likes: {props.review.likes}</span>
        <span className="dislikes" onClick={(event) => { props.changeLikeDislike(event, props.index, "dislikes") }}> | Dislikes: {props.review.dislikes}</span>
      </div>
      <hr className="comment-div"/>
    </div>
  );
}

export default ReviewListEntry;