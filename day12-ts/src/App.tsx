import React from 'react';
import './App.css';
import { useState, useEffect } from "react";

const App = () => {
  const [catBreeds, setCatBreeds] = useState([]);
  const [catBreed, setCatBreed] = useState('');
  const [catImage, setCatImage] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');
  const [catImageLoading, setCatImageLoading] = useState(false);
  const [catImageError, setCatImageError] = useState(false);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        setCatBreeds(data);
      })
      .catch(error => {
        console.log(error);
      }
      );
  }
  , []);

  return(
    <div className="App">
      <h1>Cat Breeds</h1>
      <select onChange={(e) => setCatBreed(e.target.value)}>
        <option value="">Select a breed</option>
        {catBreeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
      </select>
      <button onClick={() => {
        setCatImageLoading(true);
        setCatImageError(false);
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catBreed}`)
          .then(response => response.json())
          .then(data => {
            setCatImage(data[0].url);
            setCatImageUrl(data[0].url);
            setCatImageLoading(false);
          }
          )
          .catch(error => {
            setCatImageError(true);
            setCatImageLoading(false);
          }
          );
      }
      }>Get Cat Image</button>
      {catImageLoading && <p>Loading...</p>}
      {catImageError && <p>Error!</p>}
      {catImage && <img src={catImageUrl} alt="cat" />}
    </div>
  );
}

export default App;
