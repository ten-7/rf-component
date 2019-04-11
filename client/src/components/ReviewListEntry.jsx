import React from 'react';
import StarRatings from 'react-star-ratings';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
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
        <span className="likes">Likes: {props.review.likes}</span>
        <ThumbUp onClick={(event) => { props.changeLikeDislike(event, props.index, "likes") }} />
        <span className="dislikes"> | Dislikes: {props.review.dislikes}</span>
        <ThumbDown onClick={(event) => { props.changeLikeDislike(event, props.index, "dislikes") }}/>
      </div>
      <hr className="component-div"/>
    </div>
  );
}

export default ReviewListEntry;