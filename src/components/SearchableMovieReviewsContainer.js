import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getData()
    }

    getData = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=A8dCpQWfufZZawDhPqMlVUO0IxqlPkqN`)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange}>
                    </input>
                    <button> Search Movie Reviews
                    </button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}