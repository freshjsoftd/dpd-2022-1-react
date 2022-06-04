import React, { Component } from 'react';
import './WatchForm.css'

export class WatchForm extends Component {

  state = {
    movieTitle: '',
    director: '',
  }

  onIputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.movieTitle,
      director: this.state.director,
      isDone: false,
    })
    this.setState({
      movieTitle: ''
    })
  }

  render() {
    console.log(this.state);
    return (
      <form className="watch-form"
            onSubmit={this.onFormSubmit}>
          <input type="text"
                name='movieTitle'
                value={this.state.movieTitle}
                onChange={this.onIputChange}/>
          <input type="text"
                name='director'
                value={this.state.director}
                onChange={this.onIputChange}/>
          <button className="add">Add</button>
          <button 
                className="save"
                type='button'
                onClick={this.props.onSave}>Save</button>
      </form>
    )
  }
}

export default WatchForm;