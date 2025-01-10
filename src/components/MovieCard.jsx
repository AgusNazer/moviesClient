import { useState } from "react";
import PropTypes from "prop-types";

const MovieCard = ({ movie, onVote }) => {
  const [rating, setRating] = useState("");

  const handleVote = () => {
    // Validar que la calificación esté dentro del rango de 1 a 10
    if (rating >= 1 && rating <= 10) {
      onVote(movie.id, parseFloat(rating));
      setRating(""); // Limpiar la entrada después de votar
    } else {
      alert("Por favor, ingresa una calificación entre 1 y 10");
    }
  };

  return (
    <div style={styles.card}>
      <img src={movie.imageUrl} alt={movie.title} style={styles.image} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Año: {movie.year}</p>
      <p>Votos: {movie.votes}</p>
      <p>Calificación: {movie.rating.toFixed(1)}</p>
      <input
        type="number"
        placeholder="Puntúa (1-10)"
        min="1"
        max="10"
        step="0.1"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleVote} style={styles.button}>
        Your rate
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  input: {
    marginTop: "8px",
    padding: "4px",
    width: "80%",
  },
  button: {
    marginTop: "8px",
    padding: "8px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

// Validar propiedades con PropTypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
};

export default MovieCard;
