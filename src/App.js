import React, {useEffect, useState} from 'react';

import movieService from './movie-service';
import './App.css';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';
import initialState from './model/initial-to-watch';
import {MovieContext} from './context/MovieContext';

function App() {
  const [toWatchMovies, setToWatchMovies] = useState(initialState);

  // //Getting data with fetch api
  // useEffect(() => {
  //   fetch('http://localhost:5000/watch')
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log(data);
  //       if(!data){
  //         setToWatchMovies([])
  //       }else{
  //         setToWatchMovies(data);
  //       }
  //     })
  // }, []);
  // //Getting data with axios
  useEffect(() => {
    movieService.get('/').then(({data}) => {
      if (!data) {
        setToWatchMovies([]);
      } else {
        setToWatchMovies(data);
      }
    });
  }, []);

  // useEffect(() => {
  //   getFromStorage();
  // }, []);

  function deleteToWatch(id) {
    movieService
      .delete(`/${id}`)
      .then(({statusText}) => console.log(statusText));
    const newWatchMovies = toWatchMovies.filter((movie) => movie.id !== id);
    setToWatchMovies(newWatchMovies);
    // saveToStorage(newWatchMovies);
  }

  // function saveToStorage(movies) {
  //   localStorage.setItem('movies', JSON.stringify(movies));
  // }

  // function getFromStorage() {
  //   const movies = JSON.parse(localStorage.getItem('movies'));
  //   if (!movies) {
  //     setToWatchMovies(initialState);
  //   } else {
  //     setToWatchMovies(movies);
  //   }
  // }

  function toggleToWatch(id) {
    const updatedMovie = toWatchMovies.find((movie) => movie.id === id);
    updatedMovie.isDone = !updatedMovie.isDone;
    movieService.put(`/${id}`, updatedMovie).then(({data}) => {
      // console.log(data);
      setToWatchMovies(
        toWatchMovies.map((movie) => (movie.id !== id ? movie : data)),
      );
    });
    // saveToStorage(newWatchMovies);
  }

  function addNewToWatch(toWatch) {
    toWatch.id = Date.now();
    movieService.post('/', toWatch).then(({data}) => {
      const newWatchMovies = [...toWatchMovies, data];
      setToWatchMovies(newWatchMovies);
    });
    // saveToStorage(newWatchMovies);
  }

  return (
    <div className="container">
      <MovieContext.Provider value={toWatchMovies}>
        <WatchList
          // movies={toWatchMovies}
          onToggle={toggleToWatch}
          onDelete={deleteToWatch}
        />
        <WatchForm onSubmit={addNewToWatch} />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
