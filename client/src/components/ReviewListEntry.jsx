import React from 'react';
import StarRatings from 'react-star-ratings';
import { ThumbDown } from '@material-ui/icons/';
import Typography from '@material-ui/core/Typography';

const ReviewListEntry = (props) => {
  let id = `entry${props.index}`
  return (
    <div id={id} className="entry">
      <div>
        <span className="user">{props.review.username}</span>
        <span> | <StarRatings 
                    rating={props.review.score} 
                    starRatedColor="orange"
                    starDimension="20px"/>
        </span>
      </div>
        <br />
      <div className="body">
        {props.review.body}
      </div>
        <br />
      <div>
        {/* <ThumbDown /> */}
        <span className="likes" onClick={(event) => { props.changeLikeDislike(event, props.index, "likes") }}>Likes: {props.review.likes}</span>
        <span className="dislikes" onClick={(event) => { props.changeLikeDislike(event, props.index, "dislikes") }}> | Dislikes: {props.review.dislikes}</span>
      </div>
      <hr className="component-div"/>
    </div>
  );
}

export default ReviewListEntry;