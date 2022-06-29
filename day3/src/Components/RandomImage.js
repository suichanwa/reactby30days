import React from 'react';
import ReactDOM from 'react-dom';



class RandomImage extends React.Component{
    state = {
        text: 'some text',
        image: 'https://safebooru.org//samples/3883/sample_cfbf025280efc144f3b7d939c2284d191b18b312.jpg?4059123',
    }

    chanageImg = () => {
        let firstImg = 'https://safebooru.org//images/3881/5b8e04dcf5884f13df8b9c753cce821ef8623fe2.jpg?4057078';
        let secondImg = 'https://safebooru.org//samples/3876/sample_6d82d8692c9aef21bb9ced25b2250ed9717d19c7.jpg?4052178';
        let thirdImg = 'https://safebooru.org//samples/3876/sample_caf3ff41d83619d857aaf23734cf3f1bd3a9aa47.jpg?4052179';

        let image = this.state.image === firstImg ? secondImg : this.state.image === secondImg ? thirdImg : firstImg;
        this.setState({image: image});
    }

    changeText = () => {
        this.setState({text: 'Hello World'});
        this.setState({text: 'another info'});
        this.setState({text:'threes info'});
    }


    render(){
        
        return(
            <div>
                <h1>Random Image</h1>
                <p>{this.state.text}</p>
                <img src={this.state.image} alt="random image" />
                <button onClick={this.chanageImg}>Change Image</button>
                <button onClick={this.changeText}>Change Text</button>
            </div>
        )
    }
}

export default RandomImage;