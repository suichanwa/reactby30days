import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const Home = (props: any) => <h1>Welcome Home</h1>
const About = (props:any) => <h1>About Us</h1>
const Contact = (props:any) => <h1>Contact us</h1>

const Challenges = (props:any) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class Rr extends Component {
   /* 
    render() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/challenges" component={Challenges} />
          </Switch>
      </Router>
    )
  }
  */
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Rr />, rootElement)