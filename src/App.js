import React from "react";
import ImgCard from './components/imgCard';
import DateCard from './components/dateCard';
import "./App.css";

function App() {
  return (
    <div className="App">
      <DateCard />
      <ImgCard />
    </div>
  );
}

export default App;

// let today = moment().format("YYYY-MM-DD");
// import moment from "moment";

// from the studio ghibli example:
// 2 components in component folder, MovieCard and MovieList

// MovieCard only imports React from "react"
// MovieCard takes the film title from props.title and the description from props.description and puts them into an h2 ad p, then exports the elements with props to MovieList.js

// MovieList imports React, { useState, useEffect }
// imports axios
// imports MovieCard
// MovieList.js makes the axios get, then, and catch calls
// MovieList maps over the MovieCard with key, title, description, director, and release_date and exports MovieList

// App.js imports MovieList
