// Code MovieReviews Here
import React from 'react';

const Review = ({ headline, summary_short }) => (
    <div >
    <h3>{headline}</h3>
    <p>{summary_short}</p>
    </div>
  )

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
  {reviews.map((review, indx) => < Review className="review" key={indx} headline={review.headline} summary_short={review.summary_short}/>) }
  </div>
  )

export default MovieReviews
