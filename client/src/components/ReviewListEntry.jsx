import React from 'react';
import StarRatings from 'react-star-ratings';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Grid, Paper } from '@material-ui/core';

const ReviewListEntry = (props) => {
  let id = `entry${props.index}`;

  return (
    <div id={id} className="entry">
    <Grid container spacing={8}>
      <Grid item xs={3}>
        <Paper>
        <div>
          <Paper style={{height: "25px"}}>
            <span className="user">{props.review.username}</span>
            <span> | <StarRatings 
                        rating={props.review.score} 
                        starRatedColor="orange"
                        starDimension="20px"/>
            </span>
          </Paper>
        </div>
        <div>
          <Paper>
            <span className="likes">Likes: {props.review.likes}</span>
            <ThumbUp style={{height: "15", width: "15", justifySelf: "right"}} onClick={(event) => { props.changeLikeDislike(event, props.index, "likes") }} />
          </Paper>
          <Paper>
            <span className="dislikes">Dislikes: {props.review.dislikes}</span>
            <ThumbDown style={{height: "15", width: "15"}} onClick={(event) => { props.changeLikeDislike(event, props.index, "dislikes") }}/>
          </Paper>
        </div>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <div className="body">
          {props.review.body}
        </div>
      </Grid>
    </Grid>
    <hr classname="component-div" />
    </div>
  )
}

export default ReviewListEntry;