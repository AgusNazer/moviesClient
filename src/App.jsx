// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import FetchMoviesButton from './components/ButtonFetchData'
// import titlePic from './assets/images/titlePic.webp';
import './App.css'
import MovieList from './components/MovieList';

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div>
      <h1 style={{ textAlign: "center" }}>Movie rater</h1>
      <h2> Movie list:
      <MovieList />
      </h2>
    </div>
      {/* <div>
        <h2>Rater movies app</h2>
      <a href="/s" target="_blank">
          <img src={titlePic} className="titlePic" alt="" />
        </a>
        </div>  
      <h1>Vite + React</h1>
      <div>
        <p>Traer datos de las movies</p>
        <FetchMoviesButton />
      </div> */}
     
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
