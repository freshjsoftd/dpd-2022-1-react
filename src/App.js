import React, {Component} from 'react';
import './App.css';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';


export class App extends Component {
  
  state = {
    toWatchMovies: [],
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

  saveToWatch = () =>{
     localStorage.setItem('toWatchMovies', JSON.stringify(this.state.toWatchMovies))
  }

  componentDidMount(){
    console.log('componentDidMount');
    
    const fromStorage = JSON.parse(localStorage.getItem('toWatchMovies', JSON.stringify(this.state.toWatchMovies)))
    if(!fromStorage){
      this.setState(
        {
        toWatchMovies: [],
      }
        )
    }else {
      this.setState({
        toWatchMovies: [...fromStorage]
      })
    }

    // this.idInterval = setInterval(this.saveToWatch, 2000);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    // this.saveToWatch()
    
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.idInterval);
  }
  render() {
    // console.log(this.state);
    return (
      <div className="container">
          <WatchList 
            movies={this.state.toWatchMovies}
            onToggle={this.toggleToWatch}
            onDelete={this.deleteToWatch}/>
          <WatchForm onSubmit={this.addToWatch}
                      onSave={this.saveToWatch}/>
      </div>
    )
    
  }
}

export default App;
