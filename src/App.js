import React, { useState, useEffect } from "react";
import axios from 'axios';
import ImgCard from './components/imgCard';
import DateCard from './components/dateCard';
import TitleCard from './components/titleCard';
import "./App.css";

function App() {
  const [img, setImg] = useState([]);
  const [date, setDate] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect (() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=5OoBFtavGzIHbKDwYcHN9SfX1eZYMHLTEY2aBdQQ`)
      .then(response => {
        console.log(response.data);
        console.log(response.data.url);
        console.log(response.data.title);
        setImg(response.data.url);
        setDate(response.data.date);
        setTitle(response.data.title);
      })
      .catch(error => {
        console.log('Whoops!  The data was not returned', error);
      });
  }, []);

  return (
    <div className="App">
      <TitleCard title = {title}/>
      <DateCard date = {date}/>
      <ImgCard img = {img}/>
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
