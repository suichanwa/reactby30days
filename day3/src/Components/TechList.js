import React from 'react';
import ReactDOM from 'react-dom';

class TechList extends React.Component{
    render(){
        return(
        <ul>
            {this.props.tech.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        )
    }
}

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tech: ['React', 'test', 'Vue']
        }
    }

    render(){
        return(
            <div>
                <h1>Tech List</h1>
                <TechList tech={this.state.tech}/>
            </div>
        )
    }
}

export default Main;