import React, { Component } from 'react';


// Code SearchableMovieReviewsContainer Here

export default class SearchForm extends Component {


  // Fully controlled form has a value updated from state and updates state
  // as the value changes. There is also some sort of onsubmit handler. Does 
  // The form element hold this state? would assume so, and the parent handles
  // The submit

  handleChange = (event) => {
    this.setState({searchValue: event.target.value}, console.log("current setting state", event.target.value))
  }

  state = {
    searchValue: ""
  }


  render() {

    return (
    <form onSubmit={this.props.handleSubmit}>
      <label>Search Movie Reviews:</label>
      <input type="text" onChange={this.handleChange} value={this.state.searchValue}></input>
      <input type="submit"></input>
    </form>
    )
}
}
