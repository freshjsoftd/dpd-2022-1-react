import React, {useEffect, useState} from 'react';
import './App.css';
// import TypeProps from './components/TypeProps/TypeProps';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';
import moviesService from './movies-service.js';
// import initialState from './model/initial-to-watch';

function App() {
  const [toWatchMovies, setToWatchMovies] = useState([]);

  useEffect(() => {
    moviesService
      .get('/')
      .then(({data}) => setToWatchMovies(data))
      .catch((error) => console.log(error));
  }, []);

  function deleteToWatch(id) {
    moviesService.delete(`/${id}`)
    const newWatchMovies = toWatchMovies.filter((movie) => movie.id !== id);
    setToWatchMovies(newWatchMovies);
  }

  function toggleToWatch(id) {
    const updatedMovie =toWatchMovies.find((movie) => movie.id === id);
    updatedMovie.isDone = !updatedMovie.isDone;
    moviesService.put(`/${id}`, updatedMovie)
    .then(({data}) => setToWatchMovies(toWatchMovies.map((movie) =>
    movie.id !== id ? movie : data,
  )))
  }

  function addNewToWatch(toWatch) {
    toWatch.id = Date.now();
    moviesService.post('/', toWatch).then(({data}) => {
      const newWatchMovies = [...toWatchMovies, data];
      setToWatchMovies(newWatchMovies);
    });
  }

  return (
    <div className="container">
      <WatchList
        movies={toWatchMovies}
        onToggle={toggleToWatch}
        onDelete={deleteToWatch}
      />
      <WatchForm onSubmit={addNewToWatch} />
      {/* <TypeProps 
          // numb={20}
          // string={2}
          string='movie'
          bool={true}
          func={() => 'It is a function'}
          movies={toWatchMovies}
          /> */}
    </div>
  );
}

export default App;
