import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('dotenv').config();

// const NYT_API_KEYs = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${process.env.REACT_APP_NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReview extends Component {



  // hold latest movies state
  state = {
    latestMovies: []
  }

  // fetch latest movies on component mount complete
  componentDidMount() {
    (async () => {
      const resp = await fetch(URL)
      const latestMoviesFromApi = await resp.json()
      this.setState({latestMovies: latestMoviesFromApi.results}, console.log("from api:", latestMoviesFromApi.results))
    })()
  }

  render() {
    console.log(process.env.REACT_APP_NYT_API_KEY)
    return <div className="latest-movie-reviews"><MovieReviews movieResults={this.state.latestMovies}/></div>
  }
}

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
