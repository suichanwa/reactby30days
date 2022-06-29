import React, { ComponentLifecycle } from 'react'
import ReactDOM from 'react-dom'



class Header extends React.Component {
  data = {
    welcome: "somedata",
    title: String,
    subtitle: String,
  }


  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }

    // conditional rendering using if and else statement

    let status

    if (this.state.loggedIn) {
      status = <h3>Welcome to 30 Days Of React</h3>
    } else {
      status = <h3>Please Login</h3>
    }

    return (
      <div className='app'>
        <Header data={data} />
        {status}
      </div>
    )
  }
}

ReactDOM.render(<App />, rootElement)

export default App;