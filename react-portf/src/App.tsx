import React from 'react';
import Avatar from './Components/Avatar';
import Techs from './Components/Techs';
import ChangeTheme from './Components/ChangeTheme';
import './App.css';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const darkTheme = {
        backgroundColor: '#000',
        color: '#fff',
    }

    //create light theme with react
    const lightTheme = {
        backgroundColor: '#fff',
        color: '#000',
    }

  return (
    <div style={theme === 'light' ? darkTheme : lightTheme}>    
      <ChangeTheme />
      <Avatar />
      <Techs />
    </div>
  );
}

export default App;
