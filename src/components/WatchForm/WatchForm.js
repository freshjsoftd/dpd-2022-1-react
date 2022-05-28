import React, { Component } from 'react';
import './WatchForm.css'

export class WatchForm extends Component {

  state = {
    movieTitle: '',
  }

  onIputChange = (event) => {
    this.setState({
      movieTitle: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.movieTitle,
      isDone: false,
    })
  }

  render() {
    return (
      <form className="watch-form"
            onSubmit={this.onFormSubmit}>
          <input type="text"
                value={this.state.movieTitle}
                onChange={this.onIputChange}/>
          <button className="add">Add</button>
      </form>
    )
  }
}

export default WatchForm;