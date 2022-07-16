import React from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Contact from './Contact'
//import { Routes } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Switch from 'react-router-dom'

export default class Routing extends React.Component{
   render() {
       return(
           <Router>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Router>
       )
   }
}

