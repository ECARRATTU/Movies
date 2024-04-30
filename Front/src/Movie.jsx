import React from 'react';

const Movie = ({ id, title, year, director, duration, poster, genre }) => {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p><strong>Director:</strong> {Movie.director}</p>
      <p><strong>Año:</strong> {Movie.year}</p>
      <p><strong>Género:</strong> {Movie.genre}</p>
    </div>
  );
};

export default Movie;