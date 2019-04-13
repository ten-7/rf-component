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
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Paper className="btn" onClick={(event) => { props.changeLikeDislike(event, props.index, "likes") }}>
              <span className="likes">
                <ThumbUp className="btn" style={{height: "15", width: "15", justifySelf: "right"}} />
                <span className="likes-count">{props.review.likes}</span>
              </span>
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Paper className="btn" onClick={(event) => { props.changeLikeDislike(event, props.index, "dislikes") }}>
              <span className="dislikes">
                <ThumbDown style={{height: "15", width: "15"}}/>
                <span className="dislikes-count">{props.review.dislikes}</span>
              </span>
            </Paper>
          </Grid>
        </Grid>
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