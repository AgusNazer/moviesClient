import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // Obtener películas
  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error al obtener películas:", error));
  }, []);

  // Manejar votación
  const handleVote = (movieId, rating) => {
    fetch(`http://localhost:8080/api/movies/vote/${movieId}/${rating}`, {
      method: "GET", // O puedes usar "PUT" si prefieres
    })
      .then((response) => response.json())
      .then(() => {
        // Vuelves a obtener todas las películas para reflejar la calificación actualizada
        fetch("http://localhost:8080/api/movies")
          .then((response) => response.json())
          .then((data) => setMovies(data))
          .catch((error) => console.error("Error al obtener películas:", error));
      })
      .catch((error) => console.error("Error al puntuar película:", error));
  };

  return (
    <div style={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onVote={handleVote} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default MovieList;
