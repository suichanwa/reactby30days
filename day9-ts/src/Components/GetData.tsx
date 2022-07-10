import React, {Component} from 'react';

const options = [
    {
        value: '1',
        label: 'select something',
    },

    {
        value: '2',
        label: 'select something else',
    },
];

const selectOptions = options.map((option) => {
    return <option key={option.value} value={option.value}>{option.label}</option>
});

class SelectOp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
    }

    handleChange = (e: any) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
}