import React from 'react';
import ReactDOM from 'react-dom';

export default class MouseSome extends React.Component{
    state = {
        text: 'Hello',
        firstname: 'name',
        lastname: 'lastname',
        message: 'firstmess',
    }


    handleClick = (e: any) => {
       this.setState({
           message: 'testing'
       }) 
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" name="firstname" value={this.state.firstname} onClick={this.handleChange}/>
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click me</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
