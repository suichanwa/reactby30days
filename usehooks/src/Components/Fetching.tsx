import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM, {findDOMNode} from 'react-dom';

interface ICountry {
    name: string;
    flag: string;
    population: number;
}

const Country = ({country}: {country: ICountry}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <img src={country.flag} alt={`Flag of ${country.name}`} width="100" />
            <p>Population: {country.population}</p>
        </div>
    )
} 

