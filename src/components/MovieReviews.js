// Code MovieReviews Here
// Build display component
// Build for one movie
// Built for multiple movies
// Built api and replace
// Build fetch in... dependso on fetch once or around search.
// 

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<your key here>

// For fetching from the API, make sure to use
// [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch), which
// provides a particularly nice API.

import React from 'react'

const MovieReviews = () => {

  return (
    <ul className="review-list">The review list
      <li className="review">A test review</li>
      <li className="review">A test review</li>
    </ul>
  )
}

export default MovieReviews
