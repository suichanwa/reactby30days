import React from 'react';
import { View, Text, Image } from 'react-native'
import FirstStep from '../PainImages/FirstStep.jpg';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const infos = [
    {
        title: 'First Pain Step',
        avatar: {FirstStep},
    },
    {
        title: 'Second Pain Step',
        avatar: {SecondPainStep},
    },
    {
        title: 'Third Pain Step',
        avatar: {ThirdPainStep},
    },
    {
        title: 'Y Lost',
        avatar: {YLost},
    },
];

export default class CardS extends React.Component{
    render() {
        return(
            <Card title="test">
                <Image source={FirstStep} style={{height: 300, width: 300}}/>
            </Card>
        )
    }
}