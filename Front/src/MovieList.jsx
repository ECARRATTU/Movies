import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies') // Ruta al archivo JSON
      .then((response) => response.json())
      .then((data) => setMovies(data.movies)) // Accede al array de películas
      .catch((error) => console.error('Error al cargar las películas:', error));
  }, []); // Solo se ejecuta al montar el componente

  if (movies.length === 0) {
    return <div>Cargando películas...</div>; // Mensaje mientras carga
  }

  return (
    <div className="movie-list">
      <h1>Listado de Películas</h1>
      {movies.map((movie, index) => (
        <Movie key={index} {...movie} /> // Pasa las propiedades al componente Movie
      ))}
    </div>
  );
};

export default MovieList;


