import React from "react";
var validator = require("validator");

export default class Validationation extends React.Component{
    state = {
        email: '',
        password: '',
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        if(this.state.password.length < 6){
            if(!validator.isEmail(this.state.email)){
                return(
                    <div>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                        <p>Password must be at least 6 characters</p>
                    </div>
                )
            }
        }
    }
}
