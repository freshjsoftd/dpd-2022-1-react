import React, {Component} from 'react';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {

  state = {
    count: 0,
  }

  static getDerivedStateFromProps(props) {
    return {
      count: props.movies.length,
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, this.props);
    console.log(nextState, this.state);
    return true
  }


  render() {
    // console.log(this.props.movies.length);
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
