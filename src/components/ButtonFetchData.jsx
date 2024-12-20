import { useState } from 'react';
import axios from 'axios';

const FetchMoviesButton = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    setLoading(true); // Mostrar un indicador de carga
    setError(null);   // Limpiar errores previos
    try {
      const response = await axios.get('http://localhost:8080/api/movies');
      setMovies(response.data); // Guardar los datos obtenidos
    } catch (err) {
      setError(err, 'Error al obtener los datos.'); // Manejar errores
    } finally {
      setLoading(false); // Ocultar el indicador de carga
    }
  };

  return (
    <div>
      <button onClick={fetchMovies}>Obtener Películas</button>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - {movie.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchMoviesButton;
