import './barchar.css';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

const BarChart = () => {
    //create a array with 10 numbers between 0 and 100
    const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

    

    const bars = data.map((value, index) => {
        if (value % 2 === 0) {
            return (
                <div key={index} className="bar">
                    <div className="bar-val">{value}</div>
                </div>
            );
        }
        return (
            <div key={index} className="bar">
                <div className="bar-value">{value}</div>
            </div>
        );
    }
    );

    //if number from array data are evens then colored the bar green
    const barsEven = data.map((value, index) => {
        if (value % 2 === 0) {
            return (
                <div key={index} className="bar">
                    <div className="bar-val">{value}</div>
                </div>
            );
        }
    })


    return (
        <div className="bar-chart">
            {bars}
        </div>
    );
    
}
export default BarChart;
