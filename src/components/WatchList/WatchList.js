import React, {Component} from 'react';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.movies.map((movie) => {
          return (
            <WatchItem 
                key={movie.id} 
                movie={movie}
                onToggle={this.props.onToggle}
                onDelete={this.props.onDelete}/>
          )
        })}
      </div>
    )
  }
}

export default WatchList;
