import React from 'react';
import './App.css';
import {TimerView, ResetTimer} from './Components/Mobstore';
import { Chgrf } from './Components/Chgrf';
import { Focuss } from './Components/Focuss';


function App() {
  return(
    <div>
      <TimerView />
      <ResetTimer />
      <Chgrf />
      <Focuss />
    </div>
  ) 
}

export default App;
