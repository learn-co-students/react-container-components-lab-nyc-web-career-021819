// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

    const renderReview = () => {
        return props.reviews.map(review => {
            // console.log(review)
            return (
                <div className="review">{review.display_title}</div>
            )
        })
    }

    return (
        <div className="review-list">
            {/* {console.log("hi", props.reviews)} */}
            {renderReview()}
        </div>
    )
}

export default MovieReviews 