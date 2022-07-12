import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentsRenderinge extends React.Component{
    componentDidMount() {
        console.log('write sometihng');
    }

    static getDrivedStateFromProps(){
        console.log('getDrivedStateFromProps');
    }


    constructor(props: any){
        super(props);
        console.log('constructor');

        this.state = {
            firstname: '',
        }
    }

    render() {
        console.log('testing from render page');

        return(
            <div>
                test
            </div>
        )
    }   
}