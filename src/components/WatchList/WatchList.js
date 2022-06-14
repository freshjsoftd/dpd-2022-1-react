import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import WatchItem from '../WatchItem/WatchItem'

function WatchList({onDelete, onToggle}) {
  const movies = useContext(MovieContext)
  return (
    <div>
      {movies.map((movie) => {
        return (
          <WatchItem 
              key={movie.id} 
              movie={movie}
              onToggle={onToggle}
              onDelete={onDelete}
              />
        )
      })}
    </div>
  )
}

export default WatchList
