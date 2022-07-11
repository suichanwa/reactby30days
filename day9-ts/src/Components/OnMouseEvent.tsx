import React from 'react';
import { Component } from 'react';

export default class OnMouseEventt extends Component{

    //when i click on the button, then change the text
    handleClick = () => {
        this.state = {
            text: 'Hello'
        }
        console.log(this.state);
    }

    render(){
        return(
            //when i click then change the text
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}