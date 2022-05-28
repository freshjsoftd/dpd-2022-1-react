import React, {Component} from 'react';
import './App.css';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';


export class App extends Component {
  
  state = {
    toWatchMovies: [
      {
        id: 1,
        title: 'Movie 1',
        isDone: false,
      },
      {
        id: 2,
        title: 'Movie 2',
        isDone: true,
      },
      {
        id: 3,
        title: 'Movie 3',
        isDone: false,
      },
      {
        id: 4,
        title: 'Movie 4',
        isDone: false,
      },
    ],
    
  }

  toggleToWatch = (id) => {
    this.setState({
      toWatchMovies: this.state.toWatchMovies.map((movie) => {
        if(movie.id !== id) {
          return movie;
        }
        return {...movie, isDone: !movie.isDone};
      })
    })
  }

  addToWatch = (toWatch) => {
    // toWatch.id = Math.random()*1000;
    toWatch.id = Date.now();
    this.setState({
      toWatchMovies: [...this.state.toWatchMovies, toWatch],
    })
  }

  deleteToWatch = (id) => {
    this.setState({
      toWatchMovies: [...this.state.toWatchMovies.filter((movie) => movie.id !== id)]
    })
  }

  saveToWatch(){
    localStorage.setItem('toWatchMovies', JSON.stringify(this.state.toWatchMovies))
  }

  

  render() {
    console.log(this.state);
    return (
      <div className="container">
          <WatchList 
            movies={this.state.toWatchMovies}
            onToggle={this.toggleToWatch}
            onDelete={this.deleteToWatch}/>
          <WatchForm onSubmit={this.addToWatch}/>
      </div>
    )
    
  }
}

export default App;
