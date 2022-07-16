import React from 'react'
import {
  Route,
  Router,
} from 'react-router-dom'



const Home = (props) => <h1>Welcome Home</h1>
const About = (props) => <h1>About Us</h1>
const Contact = (props) => <h1>Contact us</h1>
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

export default class Rs extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/challenges' component={Challenges} />
        </div>
      </Router>
    )
  }
}
