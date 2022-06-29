import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import RandomImage from './Components/RandomImage';
import DarkMode from './Components/darkMode';


const App = () =>{
  const rootElement = document.getElementById('root');
  ReactDOM.render(<RandomImage />, rootElement);
  ReactDOM.render(<DarkMode/>, rootElement);
}



export default App;
