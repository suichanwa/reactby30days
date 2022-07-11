import React from 'react';
import { Component } from 'react';

export default class HandleClick extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
    }

    handleChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            //button that on click will change name
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}