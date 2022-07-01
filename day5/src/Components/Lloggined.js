import React from "react";

const Log = () => {
 
 class Header extends React.Component{
    render() {
      const {
        name,
        age,
      } = this.props.data;

      return (
        <div>
          <h1>{name}</h1>
          <h2>{age}</h2>
        </div>
      )
    }
  }


  class Exp extends React.Component{
    state = {
      isLoggingIn: true,
    }

    render() {
      const data = {
        name: 'John',
        age: '25',
      }

      let status

      if (this.state.isLoggedIn === true){
        status = 'Logged In'
      }
      else{
        status = 'Logged Out'
      }
      
      return (
        <div>
          <Header data={data} />
          <h3>{status}</h3>
        </div>
      )
    }
  }

  class LoginExt extends React.Component{
    state = {
      loggingIn: false,
    }

    handelLogin = () => {
      this.setState({
        loggingIn: !this.state.loggingIn,
      }) 
    }

    render() {
      return (
        <div>
          <button onClick={this.handelLogin}>
            {this.state.loggingIn ? 'Logout' : 'Login'}
          </button>
          <Exp />
        </div>
      )
    }
  }

  return (
    <div>
      <LoginExt />
    </div>
  )
}

export default Log;