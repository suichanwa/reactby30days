import React from 'react';

class Counter extends React.Component{
    state = {
        count: 0
    }

    render(){
        const count = this.state.count
        return(
            <div>
                <h1>Hello World</h1>
                <p>You clicked {count} times</p>
                <button onClick={() => this.setState({count: count + 1})}>Click me</button>
            </div>
        )
    }
}

export default Counter;