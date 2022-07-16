import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import {useParams} from 'react-router-dom';

export default class Routss extends React.Component {
  render() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users/4200">Users</Link>
            </li>
            <li>
              <Link to="/does-not-exist">Catch all route</Link>
            </li>
              <Link to="/users/4200/posts/1">Posts</Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users/:userId" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
          <Route path="/page-not-found" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
 }
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  const params = useParams();

  return <h2>Users: {params.userId}</h2>;
}

function PageNotFound() {
  return <h2>Page not found</h2>;
}