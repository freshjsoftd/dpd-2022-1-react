import React, { useEffect, useState } from 'react'
import './App.css'
import WatchForm from './components/WatchForm/WatchForm'
import WatchList from './components/WatchList/WatchList'
import initialState from './model/initial-to-watch';



function App() {
 
    const [toWatchMovies, setToWatchMovies] =  useState([]);

    useEffect(() => {
      const movies = JSON.parse(localStorage.getItem('movies'));
      if(!movies){
        setToWatchMovies(initialState);
      }else{
        setToWatchMovies(movies);
      }
        }, [])

    function deleteToWatch(id) {
      const newWatchMovies = toWatchMovies.filter((movie) => movie.id !== id);
      setToWatchMovies(newWatchMovies);
      saveToStorage(newWatchMovies);
    }

    function saveToStorage(movies){
      localStorage.setItem('movies', JSON.stringify(movies));
    }

    // function getFromStorage(){
    //   const movies = JSON.parse(localStorage.getItem('movies'));
    //   if(!movies){
    //     setToWatchMovies(initialState);
    //   }else{
    //     setToWatchMovies(saveToStorage(movies));
    //   }
      
    // }

    function toggleToWatch(id) {
      const newWatchMovies = toWatchMovies.map((movie) => movie.id !== id ? movie 
                                      :  {...movie, isDone: !movie.isDone});
      setToWatchMovies(newWatchMovies);
      saveToStorage(newWatchMovies);
    }

    function addNewToWatch(toWatch){
      toWatch.id = Date.now();
      const newWatchMovies = [...toWatchMovies, toWatch];
      setToWatchMovies(newWatchMovies);
      saveToStorage(newWatchMovies);
    }

  return (
    <div className="container">
        <WatchList 
          movies={toWatchMovies}
          onToggle={toggleToWatch}
          onDelete={deleteToWatch}
          />
        <WatchForm 
          onSubmit={addNewToWatch}
        //             onSave={this.saveToWatch}
                    />
    </div>
  )
}

export default App