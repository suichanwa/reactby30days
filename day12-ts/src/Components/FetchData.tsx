import React from "react";
import ReactDOM from "react-dom";



class FetchData extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {
            datas: {
                name: "",
                age: 0
            },
       }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => this.setState({datas: data}))
    }
    render(){
        return(
            <div>
                <h1>{}</h1>
            </div>
        )
    }
}