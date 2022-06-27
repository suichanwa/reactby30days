import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import myicon from './logo.svg';


function App() {

const img = (
  <img src={myicon} alt="logo" />
)


const firstTask = (
  <div>
    <button type="button">test</button>
  </div>
)



const header = (
  <header>
    <h1>Hello World</h1>
  </header>
);

const main = (
  <main>
    <p>This is the main content</p>
  </main>
);

const footer = (
  <footer class = 'footer-class'>
    <p>This is the footer</p>
  </footer>
);

const tech = ['test', 'test2', 'test3'];
const techFormatter = tech.map(function(tech) {
  return <li>{tech}</li>
});


const app = (
  <div class = "app">
    {header}
    {main}
    {techFormatter}
    {footer}
  </div>
)

ReactDOM.render(app, document.getElementById('root'));
ReactDOM.render(img);


};

export default App;