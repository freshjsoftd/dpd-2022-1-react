import React, {Component} from 'react';
import './WatchItem.css'

export class WatchItem extends Component {

  onMovieDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.movie.id)
  }

  componentWillUnmount(){
    console.log('Bye, bye');
  }

  render() {
    // console.log(this.props);
    return (
    <div className={'watch-item ' + (this.props.movie.isDone ? 'done' : '')}
          onClick={() => this.props.onToggle(this.props.movie.id)}>
      <p className='content'>{this.props.movie.title}</p>
      <span className='delete-btn'
            onClick={this.onMovieDelete}>X</span>
    </div>
    );
  }
}

export default WatchItem;
