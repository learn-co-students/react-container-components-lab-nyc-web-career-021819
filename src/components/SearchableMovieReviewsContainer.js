import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
            const searchUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  
  state = {
    searchedMovies: [],
    searchTerm: ""
  }


 

  handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target.children[1].value;
    console.log(event.target.children[1].value);
   

    // fetch using the search value
    (async () => {
      await this.setState({searchTerm: searchValue});
      console.log("url", searchUrl + this.state.searchTerm + `?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      const resp = await fetch(searchUrl + this.state.searchTerm + `&api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      const searchedMoviesFromApi = await resp.json()
      this.setState({searchedMovies: searchedMoviesFromApi.results}, console.log("api resp", searchedMoviesFromApi.results))
    })()
  }



  render() {

    return (
    <div className="searchable-movie-reviews">
      <SearchForm handleSubmit={this.handleSubmit} />
      <MovieReviews movieResults={this.state.searchedMovies}/>
    </div>
    )
  }
}

// Make a fully controlled search form
