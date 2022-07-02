import React from "react";

export const Run = () => {
    return (
        <div className="App">
        <h1>Hello World!</h1>
        </div>
    );
}


//testing exporting functions
export function GetAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}