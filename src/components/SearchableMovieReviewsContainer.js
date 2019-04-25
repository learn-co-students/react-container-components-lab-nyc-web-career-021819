import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'A8dCpQWfufZZawDhPqMlVUO0IxqlPkqN';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  changeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
      fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=A8dCpQWfufZZawDhPqMlVUO0IxqlPkqN`)
      .then(res=>res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.submitHandler}><input onChange={this.changeHandler}/><button>Search</button></form>
      < MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
