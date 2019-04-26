// Code MovieReviews Here
// Build display component
// Build for one movie
// Built for multiple movies
// Built api and replace
// Build fetch in... dependso on fetch once or around search.
// process.env.REACT_APP_NYT_API_KEY

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<your key here>

// For fetching from the API, make sure to use
// [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch), which
// provides a particularly nice API.

import React from 'react'

const MovieReviews = (props) => {

  console.log("MR Props", props.movieResults)
  
  const movies = props.movieResults
  function renderLatestMovieList() {
   
    console.log("rendering movie list!")
    return movies.map(movie => {
      console.log("rendering a movie!")
      return <li>{movie.display_title}</li>
    })
  }

  return <ul className="review-list">{renderLatestMovieList()}</ul>
}

export default MovieReviews

// {
  // Gonna use results.
  // "status": "OK",
  // "copyright": "Copyright (c) 2019 The New York Times Company. All Rights Reserved.",
  // "has_more": true,
  // "num_results": 20,
  // "results": [
  //   {
  //     "display_title": "Be Natural: The Untold Story of Alice Guy-Blaché",
  //     "mpaa_rating": "",
  //     "critics_pick": 1,
  //     "byline": "A.O. SCOTT",
  //     "headline": "‘Be Natural’ Review: Rescuing Alice Guy Blaché, a Film Pioneer, From Oblivion",
  //     "summary_short": "This lively documentary shows how a founder of two national cinemas — director, producer and studio boss — was almost forgotten.",
  //     "publication_date": "2019-04-25",
  //     "opening_date": "2018-12-07",
  //     "date_updated": "2019-04-25 15:06:02",
  //     "link": {
  //       "type": "article",
  //       "url": "http://www.nytimes.com/2019/04/25/movies/be-natural-untold-story-alice-guy-blache-review.html",
  //       "suggested_link_text": "Read the New York Times Review of Be Natural: The Untold Story of Alice Guy-Blaché"
  //     },
  //     "multimedia": {
  //       "type": "mediumThreeByTwo210",
  //       "src": "https://static01.nyt.com/images/2019/04/25/arts/25benatural2/25benatural2-mediumThreeByTwo210.jpg",
  //       "width": 210,
  //       "height": 140
  //     }
  //   }
