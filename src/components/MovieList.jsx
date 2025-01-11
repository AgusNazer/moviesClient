import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import FilterBar from "./FilterBar";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);

  // Obtener películas
  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener películas");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setSortedMovies(data);
      })
      .catch((error) => console.error("Error al obtener películas:", error));
  }, []);

  // Manejar votación
  const handleVote = (movieId, rating) => {
    fetch(`http://localhost:8080/api/movies/vote/${movieId}/${rating}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        fetch("http://localhost:8080/api/movies")
          .then((response) => response.json())
          .then((data) => {
            setMovies(data);
            setSortedMovies(data);
          })
          .catch((error) => console.error("Error al obtener películas:", error));
      })
      .catch((error) => console.error("Error al puntuar película:", error));
  };

  // Manejar ordenamiento
  const handleSort = (sortOption) => {
    let sorted = [...movies];

    switch (sortOption) {
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setSortedMovies(sorted);
  };

  return (
    <div>
      <FilterBar onSort={handleSort} />
      <div style={styles.container}>
        {sortedMovies && sortedMovies.length > 0 ? (
          sortedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onVote={handleVote} />
          ))
        ) : (
          <p>No hay películas disponibles.</p>
        )}
      </div>
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
