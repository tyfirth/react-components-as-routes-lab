import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>Title: {movie.title}</h3>
            <h3>Run Time: {movie.time}</h3>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Movies;
