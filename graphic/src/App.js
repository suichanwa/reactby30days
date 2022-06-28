import React from "react";
import render from 'react-dom';
import barChars from './Components/barChars';
import ReactDOM from "react-dom";
import numgen from "./numgen";
import './App.css';

function App() {
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

  //create a graphic that will display the 10 highest population countries
const tenHighestPopulationGraphic = tenHighestPopulation.map((country, index) => {
  return (
    <div className="country-container" key={index}>
      <div className="country-name">{country.country}</div>
      <div className="country-population">{country.population}</div>
    </div>
  )
})

//compare two datas from the array and return the highest population
const highestPopulation = tenHighestPopulation.reduce((acc, curr) => {
  return acc.population > curr.population ? acc : curr
})

//take the highest population and display it in the graphic
const highestPopulationGraphic = (
  <div className="country-container">
    <div className="country-name">{highestPopulation.country}</div>
    <div className="country-population">{highestPopulation.population}</div>
  </div>
)



return (
  <div>
    <barChars />
  </div>
);

}



export default App;
