import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import data from './data.js'

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    getData = () => {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=A8dCpQWfufZZawDhPqMlVUO0IxqlPkqN")
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    render() {
        // console.log(this.state.reviews)
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

    componentDidMount() {
        this.getData()
        // // console.log(data)
        // this.setState({
        //     reviews: data.results
        // })
    }

}