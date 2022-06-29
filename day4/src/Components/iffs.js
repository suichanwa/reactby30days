import React from 'react';

class HeaderCom extends React.Component {
    render(){
        const {
            welcome,
            name,
            author: {firstName, lastName},
            date,
        } = this.props.data;
    }

    return (
        <div>
            <h1>{welcome}</h1>
            <h2>{name}</h2>
            <h3>{firstName} {lastName}</h3>
            <h4>{date}</h4>
        </div>
    );
}
