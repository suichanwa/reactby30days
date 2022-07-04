import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import FirstStep from './PainImages/FirstStep.jpg';
import SecondPainStep from './PainImages/SecondPainStep.jpg';
import ThirdPainStep from './PainImages/ThirdPainStep.png';
import YLost from './PainImages/YLost.jpg';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>test</Text>
        <Image style={{width:200, height:200}} source={FirstStep}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const imgStyle = StyleSheet.create({
  image: {
    width: '300px',
    height: '300px',
    resizeMode: 'contain',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-150px',
    marginTop: '-150px',
    borderRadius: '50%',
  },
})

