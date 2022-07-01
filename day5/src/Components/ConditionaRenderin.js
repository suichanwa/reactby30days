import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, onClick, style}) => {
    return (
        <button style={style} onClick={onClick}>
        {text}
        </button>
    );
}

const buttonStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    fontSize: '20px',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
}

class Hid extends React.Component{
    render(){
      console.log(this.props.data) 

      const {
      welcome,
      title,
      author: { name, age },
      date,
    } = this.props.data

       return (
            <div style={this.props.style}>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{name}</h3>
                <h4>{age}</h4>
                <small>{date}</small>
            </div>
       )
    }
}

const Login = () => {
    return (
        <div>
            Loggin man 
        </div>
    )
}

class Condition extends React.Component{
    state = {
        loggedIn: false,
        techs: ['first', 'second','third']
    }

    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn,
        })
    }

    render(){
        const {loggedIn} = this.state

        let text = loggedIn ? 'Logout' : 'Login'

        let style = loggedIn ? {backgroundColor: '#ff0000'} : {backgroundColor: '#00ff00'}

        return (
            <div>
                <h1>{this.props.title}</h1>
                <Button text={text} onClick={this.handleLogin} style={style}/>
            </div>
        )
    }
} 

export default Condition;