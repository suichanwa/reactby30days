import React from "react";
import { View, Text, Image } from "react-native";

import FirstStep from '../PainImages/FirstStep.jpg';
import SecondPainStep from '../PainImages/SecondPainStep.jpg';
import ThirdPainStep from '../PainImages/ThirdPainStep.png';
import YLost from '../PainImages/YLost.jpg';

const infos = 
[
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

let CurrentState = 0;

let changeImg = () => {
    if(CurrentState === 0) {
        return {FirstStep};
    }
    else if(CurrentState === 1) {
        return {SecondPainStep};
    }
    else if(CurrentState === 2) {
        return {ThirdPainStep};
    }
    else if(CurrentState === 3) {
        return {YLost};
    }
}

const ChangeImgState = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', top: -150}}>
            <Image source={changeImg()} style={{height: 300, width: 300}}/>
        </View>
    )
}

export default ChangeImgState;