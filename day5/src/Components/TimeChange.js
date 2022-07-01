import React from "react";

class ChangeBackground extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date().getHours(),
        };
    }
    
    componentDidMount() {
        setInterval(() => {
        this.setState({
            time: new Date().getHours(),
        });
        }, 1000);
    }
    
    render() {
        const { time } = this.state;

        let color;

        if (time >= 6 && time < 12) {
            color = "white";
        }
        else if (time >= 12 && time < 18) {
            color = "yellow";
        } 
        else {
            color = 'red';
        }

        return (
        <div style={{ backgroundColor: color }}>
            <h1>{time}</h1>
        </div>
        );
    }
}

export default ChangeBackground;
