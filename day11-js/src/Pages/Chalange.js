import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom'
import Home from './Home';
import { Chanlange } from './Chanlange';

const Challenge = ({
  challenge: {
    name,
    description,
    status,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{level}</p>
    <p>
      Author: {firstName} {lastName}
    </p>
    {duration && (
      <>
        {' '}
        <small>{duration}</small> <br />
      </>
    )}
    <small>Number of days: {days}</small>

    <p>{description}</p>
  </div>
)

const Challenges = (props) => {
  const path = props.location.pathname
  const slug = path.split('/').slice(path.split('/').length - 1)[0]
  const challenge = Challenge.find((challenge) => challenge.slug === slug)

  return (
    <div>
      <h1>30 Days Of React Challenge</h1>
      <ul>
        {Challenge.map(({ name, slug }) => (
          <li>
            <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
        <Route
          exact
          path={'/challenges'}
          component={() => <h1>Choose any of the challenges</h1>}
        />
        <Route
          path={path}
          component={(props) => <Challenge challenge={challenge} />}
        />
    </div>
  )
}

const NotFound = (props) => {
    return(
        <h1>
            nothing found
        </h1>
    )
}

const NavBar = ({username}) => {
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/challenges">Challenges</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
}

class Apping extends React.Component {
  state = {
    username: '',
    password: '',
  }

  render(){
    return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/login" render={() => (
              <form>
                <label>
                  Username:
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </label>
                <button type="submit">Login</button>
              </form>
            )} />
            <Route path="/logout" render={() => (
              <form>
                <button type="submit">Logout</button>
              </form>
            )} />
            <Route component={NotFound} />
        </div>
      </Router>
    )
  }
}

export default Apping;