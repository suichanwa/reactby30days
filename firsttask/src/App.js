import React from 'react';
import ReactDOM from 'react-dom';
import suiimg from './suisui.jpg'
//import hex from './colorhex-generator.js';
import './App.css';



function App() {
  const img = (
    <div>
      <img class = 'suiimg' src={suiimg} alt="logo"/>
    </div>
  )

  const techList = ['React', 'React-router', 'Redux', 'Nodejs', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Enzyme', 'Chai', 'Sinon'];
  const techListElements = techList.map((tech, index) => {
    return <li class = 'techss' key={index}>{tech}</li>
  });

  const Skiils = (
    <div>
      <h2>Skills</h2>
      <ul>
        {techListElements}
      </ul>
    </div>
  )

  //create a const that will show info about todays date into footer of site
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const dateFooter = (
    <div>
      <p>Today's date is: {dateString}</p>
    </div>
  )

const app = (
  <div class='techs'>
    {img}
    {Skiils}
    {dateFooter}
  </div>
)

const getUserInfo2 = () => {
  fetch('https://api.github.com/users/suichanwa')
  .then(response => response.json())
  .then(data => {
    //display data on page
    ReactDOM.render(
      <div>
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
        <p>{data.blog}</p>
        <p>{data.location}</p>
      </div>
  )}
  )
}

getUserInfo();


ReactDOM.render(app,  document.getElementById('root'));


// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// calling a functons

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}


//ReactDOM.render(<User firstName="Asabeneh" lastName="Yeteyeh" country="Finland" />, document.getElementById('root'));



}

export default App;
