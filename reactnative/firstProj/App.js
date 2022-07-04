import React from 'react';
import CardS from './Components/Cards';
import { StyleSheet, Text, View,Image } from 'react-native';
import ChangeImgState from './Components/ChangeImgState';

import FirstStep from './PainImages/FirstStep.jpg';
import SecondPainStep from './PainImages/SecondPainStep.jpg';
import ThirdPainStep from './PainImages/ThirdPainStep.png';
import YLost from './PainImages/YLost.jpg';

export default class App extends React.Component {
  render() {
    const state = false;

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

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Pain
        </Text>
        <View style={styles.card}>
          <Image source={FirstStep} style={styles.image}/>
        </View>
        <View style={styles.card}>
          <Image source={SecondPainStep} style={styles.image}/>
        </View>
        <View style={styles.card}>
          <Image source={ThirdPainStep} style={styles.image}/>
        </View>
        <View style={styles.card}>
          <CardS source={YLost} style={styles.image}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    top: -150,
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

