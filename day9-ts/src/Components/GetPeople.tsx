import React, { Component} from 'react';

export default class GetPeople extends Component {
    state = {
        people: [],
        loading: false,
        error: null,
    }

    error = {
        message: 'this is an error',
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true});
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        this.setState({people: data, loading: false});
    }

    render() {
        const {people, loading, error} = this.state;
        if (loading) {
            return <div>Loading...</div>
        } else if (error) {
            return <div>Error: {error['message']}</div>
        } else {
            return (
                <div>
                    <ul>
                        {people.map(person => (
                            <li key={person}>{person}</li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}