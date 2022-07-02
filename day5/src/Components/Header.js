import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component{
    render(){
        const {
            title,
            subtitle,
            description,
            date,
        } = this.props.datas;

        return (
            <div className="App">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        );
    }
}

class Welcome extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Welcome to my React App</h1>
            </div>
        );
    }
    
}

class Login extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Login</h1>
            </div>
        );
    }
    
}

class Rn extends React.Component{

    state = {
        IsthisTrue: false,
    }

    render(){
        const {IsthisTrue} = this.state;

        const datas = {
            title: "Hello World!",
            subtitle: "This is a subtitle",
            description: "This is a description",
            date: new Date().toLocaleString(),
        };

        let status;

        if(this.state.IsthisTrue){
            status = "true";
        }
        else{
            status = "false";
        }

        return(
            <div className="App">
                <Header datas={datas}/>
                <p>{status}</p>

                <div className="App">
                    {IsthisTrue ? <Welcome /> : <Login />}
                </div>
            </div>
        );
    }
}

export default Rn;