import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

function App() {
  const [theme, setTheme] = useState('dark');

  // Cambiar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Guardar la preferencia en localStorage
  };

  useEffect(() => {
    // Verificar la preferencia inicial del usuario
    const storedTheme = localStorage.getItem('theme') || 'dark'; // 'dark' es el valor por defecto
    setTheme(storedTheme);
    document.body.setAttribute('data-theme', storedTheme);
  }, []);

  return (
    <>
      <div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

        <h1 style={{ textAlign: "center" }}>Movie Rater</h1>

        <h2>Movie list:</h2>
        <MovieList />

        <Footer />
      </div>
    </>
  );
}

export default App;
