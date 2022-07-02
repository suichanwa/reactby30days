import React from 'react';
import { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';

const ChangeTheme = () => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
   

    const darkTheme = {
        backgroundColor: '#000',
        color: '#fff',
    }

    const lightTheme = {
        backgroundColor: '#fff',
        color: '#000',
    }

    return (
        <div>
            <ReactSwitch
                onChange={toggleTheme}
                checked={theme === 'dark'}
                uncheckedIcon={<i className="fas fa-moon" />}
                checkedIcon={<i className="fas fa-sun" />}
                offColor="#ccc"
                onColor="#ccc"
                height={20}
                width={50}
                handleDiameter={30}
            />
            <div style={theme === 'dark' ? darkTheme : lightTheme}>
                <h1>Hello World</h1>
            </div>
        </div>
    );
};

export default ChangeTheme;
