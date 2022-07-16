import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Switch from 'react-router-dom'

const Home = (props) => {
    <h1>
        testing
    </h1>
}

const About = (props) => {
    <h1>
        About page
    </h1>
}

export default class Change extends React.Component{
    render(){
        return(
            <Router>
                <div className='App'>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}