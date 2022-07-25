import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM, { findDOMNode } from 'react-dom'
import { defaultMaxListeners } from 'stream';

interface ICountry {
    name: string;
    flag: string;
    population: number;
}

const Country = ({ country }: { country: ICountry }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <img src={country.flag} alt={`Flag of ${country.name}`} width="100" />
            <p>Population: {country.population}</p>
        </div>
    )
}


const App = (props: any) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;